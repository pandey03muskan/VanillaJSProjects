def run(book,target): 
 book.sort()
 low,high=0,len(book)-1
 while(low<high):
        if((book[low]+book[high])>target):
            high-=1
        elif((book[low]+book[high])<target):
            low+=1
        elif((book[high]+book[low])==target):
            return [low,high]
 return "NO"
target=1
book=[1,2]
res=run(book,target)
print(res)