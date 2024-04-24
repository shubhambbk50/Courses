import java.net.*;
import java.io.*;
public class DV1 extends Thread{

final DataInputStream din;
final DataOutputStream dos;
int n;
Socket s;
String frame="start";
public DV1(Socket s, DataInputStream din, DataOutputStream dos){
	this.s=s;
	this.din=din;
	this.dos=dos;
	

}

public void run(){
	try{
		
		while(!frame.equals("stop")){
		frame= din.readUTF();
		System.out.println("Revd message is: from Client "+s.getInetAddress().getHostAddress()+" "+frame);
		dos.writeUTF("BYE");
		System.out.println("Ack sent..");
		n++;
		}

		
		//sending a message
		
	}
	catch(Exception ex){
		System.out.println("Error :"+ex.getMessage());
	}


}

}
