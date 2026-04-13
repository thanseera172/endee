cmake_minimum_required(VERSION 3.10)

project(endee)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

# Main binary (MUST MATCH run.sh)
add_executable(endee
    src/main.cpp
)

# Boost support (Crow dependency)
find_package(Boost REQUIRED)
include_directories(${Boost_INCLUDE_DIRS})

# Optional Crow local include (if installed via install.sh)
if(EXISTS "${CMAKE_SOURCE_DIR}/external/Crow")
    include_directories(${CMAKE_SOURCE_DIR}/external/Crow/include)
endif()
