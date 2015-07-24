

# λ :: Minute Programming


# Declaring a Variable


#   ____
#  /|  /|
# /_|_/_|
# | / | /  <== creates a box named "bob"
# |/__|/
#


var bob;         # JavaScript ...
int bob;         # C, C++, Java, C# ...
let bob;         # Basic, Javascript (well the new Javascript)

var i : Integer; # Pascal    :(

(let (jenny 8))  # LISP      what?

# Assigning a Variable

#   ____
#  /|  /|
# /_|_/_|
# | /1| /  <== puts the value 1 in "bob"
# |/__|/
#

bob =  1 # Ruby, Python, Javascript, C, C++, Java, C#, Go
bob := 1 # Pascal, Go (if the variable has not been declared)



# Changing a Variable

bob = 2

#   ____
#  /|  /|
# /_|_/_|
# | /2| /  <== relaces 1 with the value 2 in "bob"
# |/__|/
#


x = 2
y = x * x # y is now 4

x = x + 1 # relationship to itself

Math.PI
# 3.141592653589793
Math.PI = 1

Math.PI
# 3.141592653589793


a = -9.98

# bob dropped from 100 meters
# x = x₀ + ½at²

height = 100
gravity = -9.98

time = 0
bobs_distance_to_the_ground = height + 0.5 * gravity * Math.pow(time,2) 
# 100 meters

#  o
# /|\
# / \

time = 1
bobs_distance_to_the_ground = height + 0.5 * gravity * Math.pow(time,2)
# 95.01 meters

# \o/
#  |
# / \

time = 2
bobs_distance_to_the_ground = height + 0.5 * gravity * Math.pow(time,2)
# 80.04 meters

# \ /
#  |
# /o\ 

time = 3
bobs_distance_to_the_ground = height + 0.5 * gravity * Math.pow(time,2)
# 55.08 meters

time = 4
bobs_distance_to_the_ground = height + 0.5 * gravity * Math.pow(time,2)
# 20.16 meters

# __|
#   \o
#   ( \

time = 5
bobs_distance_to_the_ground = height + 0.5 * gravity * Math.pow(time,2)
# -24.75 meters OUCH!

#  \_|o
# ^^^^^^


# In Ruby and Python you cannot delcare a variable without assgning it

bob == 1 # Checks to see if bob contains 1, which is true :)

bob = 2 # replaces bob contents with 2

bob == 1 # Now checking to see if bob contains 1 is false :(

ಠ_ಠ = 1 # works in Javascript but not in Python

this_is_a_varaible #snake_case used in Ruby, Python, C++
thisIsAVaraible # camelCase used in Java, C#, Pascal



a = 0
a = a + 2
b = a
a = b - 1
c = a + b
d = c * c - (b * b + a)

# wait whats going on here? a = 1, b = 2, c = 3, d = 4





























A Maori Geek Production





























