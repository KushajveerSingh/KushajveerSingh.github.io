---
title: C++
pagefind: false
---

## Learning C++

-   [learncpp.com](https://www.learncpp.com/) - supplement with cppreference and CPPCon
-   [studyplan.dev/cpp](https://www.studyplan.dev/cpp) - supplement with cppreference and CPPCon
    -   [studyplan.dev/sdl](https://www.studyplan.dev/sdl)
    -   Can look into computer graphics courses followed by
    -   OpenGL (old, but has better tutorials, and better to spend a month here and then move on).
    -   Vulkan (modern and cross-platform)
-   [cppreference.com](https://en.cppreference.com/w/) - supplement with CPPCon videos
-   CPPCon
    -   [2022 videos](https://www.youtube.com/playlist?list=PLHTh1InhhwT7gQEuYznhhvAYTel0qzl72)
-   [CppCoreGuidelines](https://github.com/isocpp/CppCoreGuidelines)
-   C++23 ISO specification

### Useful tools

-   (IDE) VSCode C++ [docs](https://code.visualstudio.com/docs/languages/cpp1)
-   Linter / Static Analysis
    -   clang-tidy
    -   Clang Static Analyzer
    -   CppCheck
    -   Compile with multiple compilers with all warning flags turned on
    -   SonarLint
    -   SonarCloud
    -   Ericsson/codechecker
    -   Google Sanitizers ASAN/TSAN
-   (Formatter) clang-format
-   Debugging tools
    -   GDB
    -   Valgrind
    -   [Google Sanitizers](https://github.com/google/sanitizers?tab=readme-ov-file)
-   (Package Manager) vcpkg
-   Build system
    -   Make
        -   Managing projects with gnu make
        -   makefiletutorial.com
    -   Ninja
    -   CMake
        -   Mastering CMake
        -   Professional CMake
-   Profiler
    -   Valgrind Callgrind
    -   Tracy Profiler
    -   google/pprof
-   Testing
    -   Google Test
    -   Catch2
    -   doctest
    -   Look at SQLite, for all the tests they perform and how to replicate then in C++ (OS error, IO error, network error, ...)
-   Compiler
    -   GCC
    -   Clang
-   [List](https://en.cppreference.com/w/cpp/links/libs) of open-source libraries
-   How to optimize bytecode (like JS uses UTF-16 by default, but UTF-8 can also be used).
-   AUTOSAR
    -   Used in cars
    -   Has a good C++ standard
-   Logging (?) (page 42 of yellow book)

### Books

https://github.com/yuchdev/CppBooks

-   Understanding and Using C Pointers: Core Techniques for Memory Management (223 pages)

### Compiler

[Reddit post](https://www.reddit.com/r/Compilers/comments/15ga21m/comment/jujd5ul/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button) with information on resources.

-   Crafting Interpreters
-   CS 6120: Advanced Compilers
-   Engineering a Compiler 3rd edition
-   SSA-based Compiler Design
-   Static Program Analysis by Anders Moller
-   Modern Compiler Implementation in C
-   Advanced C and C++ Compiling
-   How to Write Shared Libraries by Ulrich Drepper

GCC

-   An Introduction to GCC for the GNU Compiler gcc and g++
-   GCC docs + what each optimize does

### Qt

-   [QT overviews](https://doc.qt.io/qt-6/overviews-main.html) explain the purpose of all libraries
-   Bryan Cairns udemy QT courses
-   Scythe Studio youtube
-   KDE Frameworks

## C

-   [Low Level Academy course](https://lowlevel.academy/courses)
    -   Zero2Hero C Programming
    -   Network Code that doesn't Suck
    -   Threads, but Smart

## Low Level Learning

Books

-   Computer Systems A Programmer's Perspective 3rd edition (1078 pages)
-   Structure and Interpretation of Computer Programs 2nd edition (883 pages)
-   Code: The Hidden Language of Computer Hardware and Software (480 pages)
-   The Elements of Computer Systems: Building a Modern Computer from First Principles 2nd edition (344 pages)
-   Operating Systems: Three Easy Pieces (747 pages)
-   Structure and Interpretation of Computer Programs 2nd edition (657 pages)
-   Computer Architecture: A Quantitative Approach 6th edition (936 pages)
-   Computer Architecture by Charles Fox (560 pages)
-   Computer Organization and Design RISC: The Hardware Software Interface 5th edition (736 pages)
-   Computers as Components: Principles of Embedded Computing System Design 5th edition (560 pages)
-   Cache Memory Book 2nd edition (256 pages)

Courses

-   How do computers work by Sebastian Lague [4 video playlist](https://www.youtube.com/playlist?list=PLFt_AvWsXl0dPhqVsKt1Ni_46ARyiCGSq)
-   Computer Science by CrashCourse [40 video playlist](https://www.youtube.com/playlist?list=PL8dPuuaLjXtNlUrzyH5r6jN9ulIgZBpdo)
-   (Coursera) Build a Modern Computer from First Principles: From Nand to Tetris [link](https://www.coursera.org/learn/build-a-computer)
-   Article on C memory management [link](https://www.rfleury.com/p/untangling-lifetimes-the-arena-allocator)
-   Casey Muratori [course](https://www.computerenhance.com/p/table-of-contents)
-   Zero to ASIC [course](https://www.zerotoasiccourse.com/)
-   Binary Exploitation / Memory Corruption by LiveOverflow [playlist](https://www.youtube.com/playlist?list=PLhixgUqwRTjxglIswKp9mpkfPNfHkzyeN)
-   [Courses](https://people.inf.ethz.ch/omutlu/lecture-videos.html) by Professor Onur Mutlu

## Projects

### Template project

Page 55 yellow book

-   Add as many compilers as possible (add intel, amd also)
-   Add as many linters as possible
-   Add support for various devops options
    -   Git
    -   Github, Gitlab, Bitbucket, self-hosted options
    -   Github Actions, Gitlab CI/CD, Jenkins, other options
    -   Docker, podman
-   Code editor
-   Debugger
-   Testing
-   Docs
-   Package manager
-   Build system
-   Tools to help check assembly easily
-   Profiler
-   Benchmarking
-   Compiling different version of code with various performance flags and checking speed/memory usage

### Fortran transpiler

-   Start from 66 standard and work your way up (look into various compiler options also)
-   [fortran-lang.org](https://fortran-lang.org/)
-   [fortranwiki.org](https://fortranwiki.org/fortran/show/HomePage)
-   Wiki has list of libraries using Fortran. Transpile them to C++, make test cases pass, test for performance to act as a proof of concept.
-   Use the official compilers for this task. A compiler has the following components
    -   Lexical analysis - source code converted to tokens
    -   Syntax analysis (parsing) - use tokens to create a syntax tree
    -   Semantic analysis - check syntax tree for consistency, like type checking, vars/funcs are defined
    -   Intermediate Code Generation - it is low-level, more abstract representation of the code that is easier to optimize, and is independent of the platform.

After successful completion of the project, you can look into other famous old languages.
