from flask import Flask, render_template
from flask_socketio import SocketIO, emit  

###
# -*- coding: utf-8 -*-
import socket

HOST = '192.168.1.124'
PORT = 80 # web port 5001


###

# socketio : build web socket #
app = Flask(__name__, template_folder='./')
app.config["DEBUG"] = True
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app, cors_allowed_origins='*')


def tcp_socket_server(msg):
   
    conn.sendall(msg['data'].encode())
    clientMessage = str(conn.recv(1024), encoding='utf-8')
 
    print('Client message is:', clientMessage)

    return clientMessage
    #conn.close()
    #print('Disconnected')


# 網頁根目錄 #
@app.route('/')
def index():
    return render_template('index1.html')

# 觸發'client_event', 收到web data並傳送至esp32#
@socketio.on('client_event')
def client_msg(msg):
    print('data : '+ msg['data'])
    esp = tcp_socket_server(msg)
    emit('server_response',{'data': esp})
    
# 觸發'client_stop', web重啟並關閉tcp socket #
@socketio.on('client_stop')
def client_stop_msg(msg):
    print('[Demo Stop]:' + msg['data'])
    conn.close()
    print('Disconnected')

# 觸發'connect_event', 建立web socket, 開啟tcp socket監聽 #
@socketio.on('connect_event')
def connected_msg(msg):
    print('test123')
    print(msg)
    emit('server_response', {'data': 'connect success'})
    server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    server.bind((HOST, PORT))
    server.listen(1)
    global conn
    conn, addr = server.accept()
    try :
        conn.settimeout(10)
    except socket.timeout:
        conn.close()

# web diconnect, 關閉tcp socket #
@socketio.on('disconnect')
def disconnect_msg():
    print('web disconnect!')
    conn.close()



if __name__ == '__main__':
socketio.run(app, debug=True, host='192.168.1.124', port=5001)
