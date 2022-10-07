#include<iostream>

using namespace std;

    bool isPalindrome(int x) {
       if(x < 0)
        {
            return false;
        }
    long  n = x;
    long  Num = 0, rem;
      while(x != 0)
    {
        rem = x%10;
        Num = (Num*10)+rem;
        x /= 10;
    }
    
    if(Num == n)
    {
        return true;
    }
     return false;
}
    int main()
    {    
       int x=161;
       int c=isPalindrome(x);
       if(c==0)
       {cout<<"false";}
       else{cout<<"true";}
        return 0;
    }
