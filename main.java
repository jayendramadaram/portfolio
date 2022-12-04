// Online Java Compiler
// Use this editor to write, compile and run your Java code online
import java.util.*;
class HelloWorld {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        
        // all four possible moves
        int[][] moves = new int[4][2];
        moves[0] = new int[]{0,1};
        moves[1] = new int[]{1,0};
        moves[2] = new int[]{0,-1};
        moves[3] = new int[]{-1,0};
        
        // define matrix
        int[][] mat = new int[N][N];
        int k = 1;
        
        int direction = 0;
        int x = 0 , y = 0;
        
        for(int i = 0 ; i < N*N ; i++) {
            
            //assign and take a step
            mat[x][y] = k;
            k++;
            x += moves[direction][0];
            y += moves[direction][1];
            
            // check boundaries and already visited
            if (0 <= x && 0<= y && x < N && y <N && mat[x][y] == 0) {
                continue;
            } else {
                x -= moves[direction][0];
                y -= moves[direction][1];
                
                //change direction
                direction = direction == 3 ? 0 : direction +1;
                x += moves[direction][0];
                y += moves[direction][1];
            }
            
            //change k
        }
        
        for(int[] arr : mat) {
            System.out.println(Arrays.toString(arr));
        }
    }
}