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