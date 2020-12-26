#include <WiFi.h>

/* 要連接的wifi熱點 */ 
const char* ssid = "NEATLAB-CLASS0000";
const char* password =  "00000000";
 
/* tcp socket port & host */
const uint16_t port = 8010;
const char * host = "192.168.1.124";

char c; 

#define RXD2 16
#define TXD2 17


void setup()
{

  /* Serial: uart0 : print on putty */
  /* Serial2: uart2 : data to mcu */
  Serial.begin(115200); 
  Serial2.begin(115200, SERIAL_8N1, RXD2, TXD2);

  /* Wifi 連線 */
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.println("...");
  }
 
  Serial.print("WiFi connected with IP: ");
  Serial.println(WiFi.localIP());
 
}

/* 當setup結束後會開始跑loop() */
/* 這邊用來做tcp socket 互傳 */ 
void loop()
{
    WiFiClient client;

    /* 確認連線是否成功 */
    if (!client.connect(host, port)) {
 
        Serial.println("Connection to host failed");
        client.stop();
        ESP.restart(); // 太久沒連線reset esp32
 
        delay(10);
        return;
    }

    /* 連線成功開始socket互傳 */
    Serial.println("Connected to server successful!");
    while(client.connected() || client.available()){    // client.available(): 有無可讀的data
        if(client.available()){
          c = client.read();
          Serial.print("Receive:");
          Serial.println(c);
          client.print(c);      // send "c" to server
          Serial2.println(c);   // uart2 to mcu
        }
    }

}
