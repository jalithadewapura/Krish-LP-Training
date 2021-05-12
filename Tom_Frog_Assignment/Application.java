import java.util.Scanner;

class Application {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		System.out.println("Enter the distance : ");
		double distance = scanner.nextDouble(); //get the distance from user
		int time = 0;
		int hops = 0;
		double remaining = distance;
		int[] hopSize = {5,3,1}; 
		int[] restTime = {1,2,5};
		while(true){
			int index = hops%3;
			hops += 1;
			remaining -= hopSize[index];
			if(remaining <= 0){
				break;
			}
			time +=  restTime[index];
		}
		System.out.println("The number of hops is " + hops);
		System.out.println("The spend time is " + time + "s");
	}
}