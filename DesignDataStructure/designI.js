/*
Design an efficient data structure for given operations
Design a Data Structure for the following operations. 
The data structure should be efficient enough to accommodate the operations according to their frequency.
1) findMin() : Returns the minimum item.
   Frequency: Most frequent

2) findMax() : Returns the maximum item.
    Frequency: Most frequent

3) deleteMin() : Delete the minimum item.
    Frequency: Moderate frequent 

4) deleteMax() : Delete the maximum item.
    Frequency: Moderate frequent 

5) Insert() : Inserts an item.
    Frequency: Least frequent

6) Delete() : Deletes an item.
    Frequency: Least frequent. 
*/


class effStructure {
  this.maxHeap = [];
  this.minHeap = [];
}


1) findMin(): O(1)
2) findMax(): O(1)
3) deleteMin(): O(log N)
4) deleteMax(): O(log N)
5) Insert(log N)
6) Delete: O(log N)