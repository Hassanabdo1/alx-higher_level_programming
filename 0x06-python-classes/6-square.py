#!/usr/bin/python3
"""Defines a class Square"""


class Square:
    "Class that defines properties of square by: (based on 5-square.py)"

    def __init__(self, size=0, position=(0, 0)):
        "Creates new instances of square"

        self.size = size
        self.position = position

    @property
    def size(self):
        "Returns the size of a squar"

        return self.__size

    @size.setter
    def size(self, value):
        "Property setter for size"

        if not isinstance(value, int):
            raise TypeError("size must be an integer")
        if value < 0:
            raise ValueError("size must be >= 0")
        self.__size = value

    @property
    def position(self):
        "Returns the position of the square"

        return self.__position

    @position.setter
    def position(self, value):
        "Property setter for position"

        if not (isinstance(value, tuple) and len(value) == 2 and
                all(isinstance(x, int) and x >= 0 for x in value)):
            raise TypeError("position must be a tuple of 2 positive integers")
        self.__position = value

    def area(self):
        "Calculates the area of square"

        return self.__size ** 2

    def my_print(self):
        "prints in stdout the square with the character #"

        if self.__size == 0:
            print()
        else:
            for _ in range(self.__position[1]):
                print()
            for _ in range(self.__size):
                print(" " * self.__position[0] + "#" * self.__size)
