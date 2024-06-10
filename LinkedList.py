class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


class LinkedList:

    def __init__(self): 
        self.head = None

    def create_head(self, data):

        if (self.head is None):
            self.head = Node(data)
        else:
            print("Head already exists")

    def insert_at_end(self, data):

        cur_ptr = self.head
        while cur_ptr.next is not None:
            cur_ptr = cur_ptr.next

        new_node = Node(data)
        cur_ptr.next = new_node

        print(f"Node with value of {data} inserted at the end")

    def insert_at_start(self, data):

        new_node = Node(data)
        temp = self.head
        self.head = new_node
        new_node.next = temp

        print(f"Node with value of {data} inserted at the start")

    def print_ll(self):

        cur_ptr = self.head
        data_str = ""
        while cur_ptr is not None:
            data_str = data_str + str(cur_ptr.data) + " -> "
            cur_ptr = cur_ptr.next

        print(data_str[:-4])


def __main__():

    ll = LinkedList()
    ll.create_head(1)
    ll.insert_at_end(5)
    ll.insert_at_end(6)
    ll.insert_at_end(7)
    ll.insert_at_end(8)
    ll.insert_at_end(9)
    ll.insert_at_start(2)
    ll.insert_at_start(3)
    ll.insert_at_start(4)
    ll.print_ll()


if __name__ == "__main__":
    __main__()


#learned about shortcuts integration