//Socket programming
// Byte stuffing
//bit stuffing
/*
||                         ||
Client                      Server
				Active
				ServerSocket   = init a 			socket port
				listen mode

Socket (IP, port)     Accept connection
*/
import java.net.*;
import java.io.*;
import java.util.*;

public class CL1
{
public static void main(String args[]){

try{
Socket s1=new Socket("localhost",8080);
Scanner scn=new Scanner(System.in);
DataInputStream din=new DataInputStream(s1.getInputStream());
DataOutputStream dos=new DataOutputStream(s1.getOutputStream());
String str1;
//Send a message to Server
//scanner class
System.out.println("enter your message here: ");
str1= scn.next();
dos.writeUTF(str1);

//recv message
System.out.println("Revd message is: "+din.readUTF());

}
catch(Exception ex){
	System.out.println("Error: "+ ex.getMessage());
}

}


}
