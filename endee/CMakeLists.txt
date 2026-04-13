cmake_minimum_required(VERSION 3.10)

project(endee)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

add_executable(endee
    src/main.cpp
)

# Boost
find_package(Boost REQUIRED)
include_directories(${Boost_INCLUDE_DIRS})

# Crow headers (IMPORTANT FIX)
include_directories(/usr/local/include)

# Threads (required for Crow server)
find_package(Threads REQUIRED)
target_link_libraries(endee PRIVATE Threads::Threads)
