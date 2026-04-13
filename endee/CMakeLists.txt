cmake_minimum_required(VERSION 3.10)
project(endee)

set(CMAKE_CXX_STANDARD 17)

include(FetchContent)

FetchContent_Declare(
  Crow
  GIT_REPOSITORY https://github.com/CrowCpp/Crow.git
  GIT_TAG v1.0+5
)

FetchContent_MakeAvailable(Crow)

add_executable(endee src/main.cpp)

target_link_libraries(endee PRIVATE Crow::Crow)
