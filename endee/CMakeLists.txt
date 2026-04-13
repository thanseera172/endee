cmake_minimum_required(VERSION 3.10)

project(endee)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

# =========================
# MAIN EXECUTABLE
# =========================
add_executable(endee
    src/main.cpp
)

# =========================
# BOOST (required by Crow internally)
# =========================
find_package(Boost REQUIRED)
target_include_directories(endee PRIVATE ${Boost_INCLUDE_DIRS})

# =========================
# CROW (FIXED PROPER WAY)
# =========================

include(FetchContent)

FetchContent_Declare(
    crow
    GIT_REPOSITORY https://github.com/CrowCpp/Crow.git
    GIT_TAG v1.2.0
)

FetchContent_MakeAvailable(crow)

# Link Crow properly
target_link_libraries(endee PRIVATE Crow::Crow)
