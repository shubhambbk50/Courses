binary search
2d matrix
https://www.geeksforgeeks.org/problems/median-in-a-row-wise-sorted-matrix1527/1

prefix sum


recursion
1. generate all subsets and its variation
2. cnt subsets with sum k without finding all subsets taken an elements atmost once (elements can be positive , negative or zero)
3. cnt subsets with sum k in which elements can be taken many times(positive elements only)
4. generate balanced parenetheses
5. count no of parenetheses without generating all
6. in a matrix reach from (0,0) to (n-1,n-1) without crossing diagonals
7. generate subsets in an order (lexicographically)
8. https://leetcode.com/problems/letter-combinations-of-a-phone-number/
9. https://www.geeksforgeeks.org/problems/number-of-paths0926/1
10. https://codeforces.com/contest/727/problem/A
11.https://codeforces.com/contest/55/problem/B



divide and conquer
1. fast exponentiation



SORTING
custom comparator
static bool cmp(const int a, const int b){
    // if(a < b) return true;
    // else return false;
    return a<b;
}
const limits so that there wiill not be any changes made to a and b  in this function
Stable sort -> 2(I) 1 2(II) 3
first sorting  1 2(I) 2(II) 3
second sorting 1 2(II) 2(I) 3
--stable sorting using comparator
static bool cmp(const pair<int,int>& a, const pair<int,int>& b){
    if(a.first == b.first) {
        return a.second < b.second;
    }
    else return a.first < b.second;
}

int main()
{   IOS;
    
    vector<pair<int,int>>v = {{1,0},{5,1},{-1,2},{5,3},{0,4}};
    sort(v.begin(), v.end(),cmp);
    for(auto i:v) cout<<i.first<<" ";
return 0;
}

Using comparator we can differentitate odd and even elements

---BUBBLE SORTING
we second maximum element in last( i.e. its correct position)
during buuble sort if at any time we get sorted array then to stop at that iteration
we can do the following-
Take a variable to check whether any swapping is being done in last iteration 
if swapping are not being done then stop looping 


--SORT on the basis of square of the given numbers
-15, -3, -1, -1, 3, 6, 9, 11, 100
Solution--
-15, -3, -1, -1, 3, 6, 9, 11, 100
			  j  i
take two pointers j and i 

---INSERTION SORTING
consider first part as sorted and second part as non sorted part of array
now check the smallest element in unsorted part ans insert to sorted part at correct position
again repeat this step


---LAMBDA Function (supported in c++17)
Need- if we are doing custom comparator and we need to acces an array , we  
       will need global array
       so we use lambda function so that we can use function inside a function

auto comp = [&] (char l, char r){
    return ind[l] < ind[r];
};

string customSortString(string order, string s) {
        vector<char>indices(256,-1);
        for(int i=0; i<order.size(); i++) indices[order[i]] = i;
        // lambda function
        sort(s.begin(),s.end(),[&](char& a, char&b){ return indices[a] < indices[b];});
        return s;
    }

problem- https://leetcode.com/problems/advantage-shuffle/description/
problem- https://leetcode.com/problems/custom-sort-string/description/
https://leetcode.com/problems/largest-number/description/
https://leetcode.com/problems/squares-of-a-sorted-array/
https://leetcode.com/problems/number-of-ways-to-separate-numbers/description/


Inversion count in an ARRAY-
brute force -> merge sort
https://www.geeksforgeeks.org/problems/inversion-of-array-1587115620/1?utm_source=geeksforgeeks&utm_medium=article_practice_tab&utm_campaign=article_practice_tab

Do 6 hours of code apart from learning other things 
then it can be said that u r preparing for interviews

https://codeforces.com/problemset/problem/873/D

-- STL sort function do not guarantee stablity , but we can do stable sorting 
    by using STL sort function by writing comparator function.

Stack follow LIFO
stack good question 
//application of next greater/smallest element and previous greater/smallest element
https://leetcode.com/problems/largest-rectangle-in-histogram/
https://leetcode.com/problems/maximal-rectangle/description/ 
//tricky problem if u r trying to optimize space  
https://leetcode.com/problems/min-stack/description/

Queue
--queue ke question bhut jaldi pehchan me nhi aate hai
follow FIFO, our pushing happens in back and popping in done in front
Deque me khi pe bhi push pop kr skte h
https://www.geeksforgeeks.org/problems/generate-binary-numbers-1587115620/1
https://leetcode.com/problems/implement-stack-using-queues/
https://www.geeksforgeeks.org/problems/first-negative-integer-in-every-window-of-size-k3345/1
https://www.geeksforgeeks.org/problems/first-negative-integer-in-every-window-of-size-k3345/1


Deque 
implemented using doubly linked list

Greedy
greedy can not be generalized so practice it 
Maths
Generally modular mathematics and gcd questions come 


next classes - march - 11,14,18,21
               april - 8,15,18,22,25,29
-- LINKED LIST
best way to learn a topic , choose most easy question of leetcode
and solve it then go to related question easy, medium , hard

interviwer generally ask to code linkedlist programs recursively
Learn structure pointer and dynamic memory allocation, linked list
delete free
find median of linked list
slow and fast pointer
2-pass algorithm
reverse of linked list -- using stack
     reversal using reference i.e. changing arrow direction iteration,recursive
     https://leetcode.com/problems/reverse-linked-list/

     https://leetcode.com/problems/palindrome-linked-list/description/
         isme last ki adhi linked list reverse krlo
https://leetcode.com/problems/reverse-nodes-in-k-group/
https://www.geeksforgeeks.org/linked-list-pair-sum/
https://leetcode.com/problems/rotate-list/
https://leetcode.com/problems/linked-list-cycle/description/
https://www.geeksforgeeks.org/problems/find-length-of-loop/1?track=placement
Below is interview famous question
https://leetcode.com/problems/copy-list-with-random-pointer/
https://leetcode.com/problems/copy-list-with-random-pointer/
flatten a multilevel doubly linked list






struct Node{
    int data;
    struct Node* next;
};

void linkedlistprint(Node *&head){
    struct Node *n = NULL;
    n = head;
    while(n){
        cout<<n->data<<" ";
        n = n->next;
    }
}

void linkedlistinsert(Node *&temp, int num){
    struct Node *n = NULL;
    n = new Node();

    n->data = num;
    n->next = NULL;
    temp->next = n;
    temp = temp->next;    
}

int main()
{   IOS;

    struct Node* head = NULL;
    struct Node* temp = NULL;
    

    head = new Node();
    // head->data = -1;
    // head->next = NULL;
    temp = head;

    int n; cin>>n;
    for(int i=0; i<n; i++){
        int num; cin>>num;
        linkedlistinsert(temp, num);
    }

    linkedlistprint(head->next);
   
 return 0;
}








<<<<<<<<<<<-----------------------------TREE-------------------------------->>>>>>>>>

tree is connected acyclic graph. graph is collection of nodes and vertices.
Need of trees - if there are so many dependncies then tree is easy to represent them.   
leaf node - having 0 child
non leaf - having 1 or more child
-A tree having n nodes always have n-1 vertices
-Rooted tree - edges are unidirectional, so fixed root
-Unrooted tree - edges are bidirectional , so any node can be picked as root
-A tree where each node is having one child (either right child or left child) or no child at all (leaf node).
-Binary tree - each node having 0,1 or 2 childs
- using n nodes , we get a tree with max height = n, i.e. a skewed tree
- for minimum height, we will do every node have all 2 childs except leaf nodes
   let us take perfect binary tree in which all nodes have 2 child except leaf node
   at 0th level = 2^0 = 1 node
   at 1st level = 2^1 nodes
   at 2nd level = 2^2 nodes
   at 3rd level = 2^3 nodes
   .
   .
   .
   at nth level = 2^n nodes

   so total number of nodes in perfect binary tree  = sum of G.P = 2^(n+1)-1 
   we can also find the level using logNbase2 , where N is number of nodes

   2^n nodes are present alone at last level which are approx half of total no of 
   nodes in a perfect binary tree

   - binary tree
    struct Node{
        int data;
        struct Node* left;
        struct Node* right;
    };


  - in OA, you would not recognize tree question, if there are so many dependecies(hierarchical)
    there will be tree



binary search tree

https://leetcode.com/problems/insert-into-a-binary-search-tree/
Deletion question BST
check whether BST - using inorder traversal
                  - also do without extra space
construct bst using preorder - sort preorder to get inorder
                              - we can do without space by sorting, since  
                                    predorder  is
                                        root || left || right
                             - use binary search
                        - there is one more approach which run in O(n) without space

larget bst in a binary tree - https://www.geeksforgeeks.org/problems/largest-bst/1
                            - it has many variations

largest bst sum in a binary tree
create a bst of smallest height froms sorted array
    - https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/
https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
https://leetcode.com/problems/throne-inheritance/description/






_-_-_-_-_-_-_-_ Dynamic Programming-_-_-_-_-_-_-_-_-_-_-_-_


int f(int x){
    if(x == 0) return 0;
    return x + f(x-1);
}

bitstring - have only 1 and 0

Q- count no of bitstrings of size N that dont have consecutive ones

https://www.geeksforgeeks.org/problems/consecutive-1s-not-allowed1912/1?itm_source=geeksforgeeks&itm_medium=article&itm_campaign=bottom_sticky_on_article

cnt_0 = 1
cnt_1 = 1
i = 2
while(i <= N){
    new_cnt_0 = cnt_0 + cnt_1
    new_cnt_1 = cnt_0

    cnt_0  = new_cnt_0
    cnt_1  = new_cnt_1
}

Ques - Arr [1,2,3]
find sum of prod of all the subsets 

ans = 0
for(int i=0; i<n-1; i++){
    ans = a[i] * (ans+1) + ans;9
}

Ques - fibonacci

int dp[N+1] = {-1, -1, -1, ......}

int fibo(int n){
    if(n < 2) return n;    // base case

    if(dp[n] != -1){        /// mem check
        return dp[n];
    }

    dp[n] = fibo(n-1) + fibo(n-2);   // solve
    return dp[n];
}



Ques - Stairs, u can jump 1 or 2 step . find ways to reach from bottom to top

int f(int n){
    if(n == 2) return 2;
    if(n == 1) return 1;
    if(n < 1) return 0;
    ans [n] = ans[n-1] + ans[n-2];
    return ans[n] 
}

variataions of fibonacci series

Q - find maximum sum subsegment with no adjacent elements
Q - solve above question if it have negative elements also


Ques - rod cutting so that we get max price
https://www.geeksforgeeks.org/problems/rod-cutting0840/1?itm_source=geeksforgeeks&itm_medium=article&itm_campaign=bottom_sticky_on_article

int RC(int curr_len){
    if(curr_len == 0) return 0;
    int ans = -inf;
    for(first = 1; first <= curr_len ; first++){
        ans = max(ans, price[first-1] + RC(curr_len - first));
    }
}

https://leetcode.com/problems/integer-break/


-----DP on string

Ques - longest common sequence LCS
https://leetcode.com/problems/longest-common-subsequence/description/

LCS(i, j) = if(s1[i] == s2[j] ) 1 + LCS(i-1, j-1);
            else max(LCS(i,j-1), LCS(i-1,j));

CODE:


// Always pass string by reference since it may result in 
// TLE due to copy the string at each recursive call

int LCS(string& s1, string& s2, int i, int j){
    if(i < 0 || j < 0) return 0;
    
    if(s1[i] == s2[j])  return 1 + LCS(i-1, j-1);
    return max(LCS(i,j-1), LCS(i-1, j));
    return ans;
}

// draw recursion tree , you will find overlapping subproblem

int LCS(string& s1, string& s2, int i, int j){
    if(i < 0 || j < 0) return 0;

    int MEM[M][N];
    if(MEM[i][j] != -1) return MEM[i][j] == -1;

    if(s1[i] == s2[j]) MEM[i][j] = 1+LCS(i-1, j-1);
    else MEM[i][j] = max(LCS(i,j-1), LCS(i-1, j));

    return MEM[i][j];

}

Tabulation - bottom up

// table ko uper se niche fill krna h ya niche se uper  , ye
// chij recurrence relation se pta chalti hai

//  make table

int dp[m+1][n+1] = {0};

for(int i=0;  i<m; i++){
    for(int j=0; j<n; j++){
        if(s1[i] == s2[j]){
            dp[i][j] = 1 + dp[i-1][j-1];
        }
        else{
            dp[i][j] = max(dp[i][j-1], dp[i-1][j]);
        }
    }
}

TC - O(m*n)
SC - O(m*n)

// we can optimize space by using 1d dp

int dp[m+1] = {0};

int curr[m+1];

// do correct below code
for(int i=0; i<m; i++){
    for(int j=0; j<n; j++){
        if(s1[i-1] == s2[j-1])  curr[j] = 1+dp[j-1];
        else curr[j] = max(dp[j-1], curr[j-1])
    }
    dp = curr;
} 


Ques - find length of longest palindromic subsequence
https://leetcode.com/problems/longest-palindromic-subsequence/
Idea1 = reverse the string and find LCS of both string
Idea2 = take two pointer one at starting and one at ending of string

    int LPS(string& s, int i, int j) {
        if(i==j) return 1;
        if(i>j) return 0;
        if(s[i] == s[j]) return 2+LPS(s, i+1, j-1);
        return max(LPS(s, i+1, j), LPS(s, i, j-1));
    }


for tabulation- make table and fill 1 in diagonal



NOTE - interleaving of two strings - two string get combine without distubing
        relative order
NOTE - if a variable is derivable from another, then it need not to be a dp state


Ques - https://leetcode.com/problems/interleaving-string/description/

    take i,j,k for s1,s2,s3;
    i = n-1,
    j = m-1,
    k = n+m-1 = i+j+1

bool check(i,j){
    // base condition
    if(i < 0){
        if(s2[0....j] == s3[0.....j]) return true;
        else return false;
    }
    if(j < 0){
        if(s1[0....j] == s3[0.....j]) return true;
        else return false;
    }


    if(s1[i] != s3[i+j+1] && s2[j] != s3[i+j+1]) return false;
    else if(s1[i] == s3[i+j+1] && s2[j] != s3[i+j+1]) return check(i-1, j);
    else if(s1[i] != s3[i+j+1] && s2[j] == s3[i+j+1]) return check(i, j-1);
    else{
        return check(i,j-1) || check(i-1,j);
    }
}

// interesting thing is in base condition , string matching
// use int instead of bool in dp 




Ques - Longest increasing subsequence
https://leetcode.com/problems/longest-increasing-subsequence/description/


for(int i=0; i<n; i++){
    LIS[i] = 1;
    for(int j=0; j<i; j++){
        if(a[j] < a[i]){
            LIS[i] = max(LIS[i], 1 + LIS[j]);
        }
    }
}


follow up question - longest bitonic subsequence
// bitnoic mean first increase then decrease , just like mountain shape






