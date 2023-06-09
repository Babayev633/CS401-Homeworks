using System;

public class HW1
{
    public static void Main(string[] args)
    {
        Console.Clear();
        PrintMenu();
                                     
        bool exit = true;

        while (exit)
        {
            Console.Write(@"
                    ╔══════════════════════════════════════════════════════════════════╗
                        Enter the number of the function you want to execute (1-4): ");
            string input = Console.ReadLine();
        Console.Write(@"                    ╚══════════════════════════════════════════════════════════════════╝
"); 

            switch (input)
            {
                case "0":
                    Console.Write(@"
                            ╔══════════════════════════════════════════════╗
                                Have a good day! Hope you liked my code
                            ╚══════════════════════════════════════════════╝
");
                    exit = false;
                    break;
                case "1":
                    FindGreatestNumber();
                    PrintMenu();
                    break;
                case "2":
                    DigitCount();
                    PrintMenu();
                    break;
                case "3":
                    CalculatePower();
                    PrintMenu();
                    break;
                case "4":
                    CalculateSumOfOddNumbers();
                    PrintMenu();
                    break;
                default:
                    Console.WriteLine("                        Invalid input. Please enter a number between 1 and 4.");
                    break;
            }
        }
    }
        
    
    
    public static void FindGreatestNumber()
    {
        bool exit2 = true;
        Console.WriteLine("\nThis code will return the greatest between 3 numbers. \nPlease enter 3 numbers:");
        
        while (exit2) {
            float num1, num2, num3, result;
            
            if (float.TryParse(Console.ReadLine(), out num1) && 
                float.TryParse(Console.ReadLine(), out num2) && 
                float.TryParse(Console.ReadLine(), out num3))
            {
                result = num1;
                
                if (num2 > result)
                {
                    result = num2;
                }
                
                if (num3 > result)
                {
                    result = num3;
                }
                
                Console.WriteLine("Your input numbers: " + num1 + ", " + num2 + ", " + num3 + ". \n" + "The greatest number: " + result);  
                exit2 = false;  
            } 
            else {
                Console.WriteLine("Invalid input. Seems you have entered non-numeric values. Please try again.  \n\n");
                Console.WriteLine("Please enter 3 numbers: \n");
            }
        }
    }

    public static void DigitCount(){
        bool exit2 = true;
        Console.Write("Hello! This code will calculate number of digits of your number. \n Please enter a number: ");
        while (exit2) {
            float input;
            int count = 0;
            if (float.TryParse(Console.ReadLine(), out input)){
                input = Math.Abs(input);
                int wholePart = (int)input;
                while (wholePart!=0){
                    wholePart/=10;
                    count++;
                }
                Console.WriteLine($"Number {input} has {count} digits");  
                exit2 = false;  
            } else {
                Console.WriteLine("Invalid input. Seems you have entered non-numeric values. Please try again.  \n\n");
                Console.WriteLine("Please enter a number: ");
            }
        }
    }

    public static void CalculatePower()
    {
        bool exit2 = true;
        Console.WriteLine("Hello! This code will calculate m power of n. \n Please enter m and n:");
        
        while (exit2) {
            int m, n;
            
            if (int.TryParse(Console.ReadLine(), out m) && 
                int.TryParse(Console.ReadLine(), out n))
            {
                int result = 1;
                
                for (int i = 0; i < n; i++)
                {
                    result *= m;
                }
                
                Console.WriteLine($"{m} raised to the power of {n} is: {result}");  
                exit2 = false;  
            } 
            else {
                Console.WriteLine("Invalid input. Seems you have entered non-numeric values. Please try again.  \n\n");
                Console.WriteLine("Please enter m and n:");
            }
        }
    }

    public static void CalculateSumOfOddNumbers()
    {
        
        bool exit2 = true;
        int sum = 0, count = 5;
        Console.WriteLine("Hello! This code will calculate the sum of only odd numbers out of the given 5. \n Please enter 5 numbers:");
        
        while (exit2) {
            while (count > 0){
                string input = Console.ReadLine();
                int number;
                
                if (int.TryParse(input, out number))
                {
                    if (number % 2 == 0)
                    {
                        sum += number;
                    }
                    count--;
                }
                else
                {
                    Console.WriteLine("Invalid input. Seems you have entered non-numeric values. Please try again.  \n\n");
                    Console.WriteLine($"Please enter the remaining {count} numbers: ");
                }
            } 
            Console.WriteLine($"Sum of odd numbers given from your input is {sum}.");
            exit2 = false;
        }
    }
    public static void PrintMenu()
    {
Console.Write(@"
╔═════════════════════════════════════════════════════════════════════════════════════════════════════╗
║                                                                                                     ║
║ Welcome to the first assignment of the Code Academy's Cybersecurity CS401. Author: Parviz Babazada. ║
║                                                                                                     ║
║                       This code have 4 options ( as we had 4 tasks ).                               ║
║                                                                                                     ║
║                       1: Find the greatest of 3 given numbers                                       ║
║                       2: How many digits of number                                                  ║
║                       3: Calculate m power of n                                                     ║
║                       4: Sum only odd numbers out of given 5                                        ║
║                                                                                                     ║
║                       0: Quit                                                                       ║
╚═════════════════════════════════════════════════════════════════════════════════════════════════════╝
        ");
    }
}
