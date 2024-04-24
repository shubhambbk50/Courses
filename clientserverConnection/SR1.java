import java.net.*;
import java.io.*;
public class SR1{

public static void main(String args[]){
	try{
	ServerSocket s=new ServerSocket(8080);
	System.out.println("Server started");
	while(true){
	Socket s1=s.accept();
	DataInputStream din=new DataInputStream(s1.getInputStream());
	DataOutputStream dos=new DataOutputStream(s1.getOutputStream());
	System.out.println("Client connected");
	System.out.println("Client "+s1.getInetAddress().getHostAddress()+" tried");
	System.out.println("Assigning new thread to this client");

	DV1 dv=new DV1(s1, din,dos);
	Thread t=new Thread(dv);
	t.start();
	//receiving message
	}
	}
	catch(Exception ex){
	System.out.println("Error :"+ex.getMessage());
	}
	}

}
