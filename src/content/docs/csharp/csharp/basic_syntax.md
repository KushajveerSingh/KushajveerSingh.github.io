---
title: Basic Syntax
---

## Basic Setup

Tooling

-   VSCode
-   Install **[C# Dev Kit](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csdevkit)** extension
-   Install **[.NET SDK](https://dotnet.microsoft.com/en-us/download)**

`dotnet` commands

-   `dotnet new console -n LearnCSharp` - create a new project called `LearnCSharp`. `console` is fine for C#. Later, this can be replaced to create ASP.NET, Blazor, Maui applications.
-   `dotnet build` - build an executable.
-   `dotnet run` - build and run the executable (use this during development).

Folder structure

-   `LearnCSharp.csproj` - Used by .NET to get information on how to build the project (can ignore).
-   `LearnCSharp.sln` - Specific to Visual Studio (Code) and is used for organizing projects. Multiple projects can be maintained together by using a solution file. (can ignore). [docs](https://learn.microsoft.com/en-us/visualstudio/extensibility/internals/solution-dot-sln-file?view=vs-2022)
-   `Program.cs` - Entry point for `dotnet run`.

VSCode specific

-   In bottom-left expand **Solution Explorer**. Reads `LearnCSharp.sln` file, to create this view. [docs](https://code.visualstudio.com/docs/csharp/project-management)

## Main method (entry point)

1. Hello World example

    ```c# title="Program.cs"
    namespace LearnCSharp
    {
      class Program
      {
        static void Main(string[] args)
        {
          Console.WriteLine("Hello, World!");
        }
      }
    }
    ```

    :::note
    Using `Program` as the class name is the convention. The following examples use `MyClass` instead of `Program` to show any class name can be used.
    :::

2. By default `LearnCSharp` namespace is created. So `namespace LearnCSharp` can be skipped.

    ```c# title="Program.cs"
    class MyClass
    {
      static void Main(string[] args)
      {
        Console.WriteLine("Hello, World!");
      }
    }
    ```

    Namespace details

    - Option 1. Change default namespace name. Specify the name of new _namespace_ in `LearnCSharp.csproj` as `<RootNamespace>YourNameSpace</RootNamespace>`

        ```c# title="Program.cs"
        namespace YourNameSpace
        {
          class MyClass
          {
            static void Main(string[] args)
            {
              Console.WriteLine("Hello, World!");
            }
          }
        }
        ```

        ```xml title="LearnCSharp.csproj"
        <Project Sdk="Microsoft.NET.Sdk">

        <PropertyGroup>
          <OutputType>Exe</OutputType>
          <TargetFramework>net9.0</TargetFramework>
          <ImplicitUsings>enable</ImplicitUsings>
          <Nullable>enable</Nullable>
          <RootNameSpace>YourNameSpace</RootNameSpace>
        </PropertyGroup>

        </Project>
        ```

    - Option 2. Although adding `<RootNameSpace>` to `LearnCSharp.csproj` can be skipped. This is not recommended, since this breaks C# tooling. C# tooling expects namespace to be `LearnCSharp.FolderName` (as shown in Option 3).

    - Option 3. Create `YourNameSpace` folder with `temp.cs`. The namespace can now be changed to `LearnCSharp.YourNameSpace`.

        ```c# title="YourNameSpace/temp.cs"
        namespace LearnCSharp.YourNameSpace
        {
          class Temp
          {
            public static void Function()
            {
              Console.WriteLine("From another namespace");
            }
          }
        }
        ```

        Call the `Function` from `Main`

        ```c# title="Program.cs"
        namespace LearnCSharp
        {
          class MyClass
          {
            static void Main()
            {
              LearnCSharp.YourNameSpace.Temp.Function();
            }
          }
        }
        ```

    Namespaces are used to organize and group related classes, primarily to avoid name conflicts when multiple classes with the same name exist in different parts of the project. Unlike Node.js, where functions or modules must be explicitly imported to be used in the current file, C# allows accessing classes across files without explicit import statements as long as they share the same namespace.

    Example of calling a class from another file, without any import statements

    ```c# title="Subfolder/temp.cs"
    class Temp
    {
      public static void Function()
      {
        Console.WriteLine("From another namespace");
      }
    }
    ```

    ```c# title="Program.cs"
    class MyClass
    {
      static void Main()
      {
        Temp.Function();
      }
    }
    ```

3. `Main` method details

    - Entry point for C# application. Can be defined in a _class_ or _struct_.
    - Can have any access modifier(`public`, `private`, `protected`, `internal`, `protected internal`, `private protected`) except `file`.
    - Must be _static_.
    - Return type must be `void`, `int`, `Task`, `Task<int>`.
    - Only one class can define `Main` method. In case multiple classes define `Main`, the program needs to be compiled with **StartupObject** option to specify which `Main` method to use as the entry point. [docs](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/compiler-options/advanced#mainentrypoint-or-startupobject)

    Specifying args in `Main`

    - `string[] args` is 0-indexed and does not include the file name of the program.

        ```c# title="Program.cs"
        class Program
        {
          public static void Main(string[] args)
          {
            string arg1 = args[0];
            string arg2 = args[1];

            Console.WriteLine(arg1);
            Console.WriteLine(arg2);
          }
        }
        ```

        ```txt title="dotnet run 1 2"
        1
        2
        ```

    - Named argument example using `string[] args`

        ```c# title="Program.cs"
        class Program
        {
          public static void Main(string[] args)
          {
            string[] arg1 = args[0].Split('=');
            string key = arg1[0];
            string value = arg1[1];

            Console.WriteLine($"{key}: {value}");
          }
        }
        ```

        ```txt title="dotnet run name=Kushaj"
        name: Kushaj
        ```

    - `Environment.GetCommandLineArgs()` is an alternative. This includes the file name of the program at 0-index as well.

        ```c# title="Program.cs"
        class Program
        {
          public static void Main()
          {
            string[] args = Environment.GetCommandLineArgs();

            Console.WriteLine(args[0]);
            Console.WriteLine(args[1]);
            Console.WriteLine(args[2]);
          }
        }
        ```

        ```txt title="dotnet run 1 name=Kushaj"
        C:\Users\ks56866\Desktop\files\LearnCSharp\bin\Debug\net9.0\LearnCSharp.dll
        1
        name=Kushaj
        ```

    - Do not parse args manually. Use `System.CommandLine`. [github](https://github.com/dotnet/command-line-api)

    Providing a return statement to `Main`. This is used to communicate if the program executed successfully.

    - In Windows, the return value of `Main` is stored in an environment variable, which can be retrieved using `ERRORLEVEL` from `.bat` file or `$LastExitCode` from `.ps1` file.

        ```c# title="Program.cs"
        class Program
        {
          private static int Main()
          {
            Console.WriteLine("Hello, World!");
            return 0;
          }
        }
        ```

        Create Powershell file to execute the program

        ```ps1 title="temp.ps1"
        dotnet run

        if ($LastExitCode -eq 0) {
          Write-Host "Execution succeeded"
        } else {
          Write-Host "Execution Failed"
        }

        Write-Host "Return value = " $LastExitCode
        ```

        Execute powershell file

        ```txt title="./temp.ps1"
        Hello, World!
        Execution succeeded
        Return value =  0
        ```

    - In Linux, `$?` holds the value of the exit code of the last executed command. And the equivalent to the powershell file is

        ```bash title="temp.sh"
        #!/bin/bash

        dotnet run

        if [ $? -eq 0 ]; then
        echo "Execution succeeded"
        else
        echo "Execution failed"
        fi

        echo "Return value = $?"
        ```

4. Top-level statements. An alternative to `Main`. Do not use this.

    ```c# title="Program.cs"
    Console.WriteLine("Hello World!");
    ```

    The above is equivalent to

    ```c# title="Program.cs"
    internal class Program
    {
      private static void Main(string[] args)
      {
        Console.WriteLine("Hello World!");
      }
    }
    ```

General structure of C# Program

```c# title="Program.cs"
using System;

namespace LearnCSharp
{
  class YourClass { }

  struct YourStruct { }

  interface IYourInterface { }

  delegate int YourDelegate();

  enum YourEnum { }

  namespace YourNestedNamespace
  {

  }

  class Program
  {
    static void Main(string[] args)
    {
      Console.WriteLine("Hello World!");
    }
  }
}
```

## Type system

In addition to the compiler checking type safety at compile time, the compiler embeds the type information into the executable file as metadata. The common language runtime (CLR) uses that metadata at runtime to further gurantee type safety when it allocates and reclaims memory.

All types derive from the base type `System.Object`. This unified type hierarchy is called Common Type System (CTS). In CTS a type can be either a value type or reference type.

-   All built-in types are `struct` and are called value types.
    -   Value types are sealed, meaning you can't derive a type from any value type.
    -   The memory is allocated inline in whatever context the variable is declared, and there is no separate heap allocation or garbage collection overhead.
    -   Value types are of two types `struct` and `enum`.
    -   `struct` is used to create custom value types.
-   Types defined using `class` or `record` are reference types.
    -   The default value at initalization is `null`.
    -   When object is created, the memory is allocated on the managed heap, and the variable holds reference to the location of the object.
    -   In the garbage collection process, there is overhead for both allocation and deallocation.
-   Literal values. For example `4.56`. These automatically receive a type from the compiler, which inherits from `System.Object` as well.
    -   The type can be specified to the compiler using `4.56f`.
-   Generic types. For example `System.Collections.Generic.List<T>`. `T` here is the placeholder for the actual type (the concrete type).
-   `var` can be used to provide an implicit type. The variable would receive the type at compile time.
-   Add `?` at the end of type (nullable value types) to allow the value to be `null`.
    -   Inherit from `System.Nullable<T>`.

If you define a class, struct, or record named `Person`, `Person` is the name of the type. If you declare and initialize a variable `p` of type `Person`, `p` is said to be an object or instance of `Person`.

In some situations, compile-time and run-time types can be different.

```c#
object anotherMessage = "This is another string of characters";
IEnumerable<char> someCharacters = "abcdefghijklmnopqrstuvwxyz";
```

In the above example, the run-time type is `string` but the compile-time type is `object` and `IEnumerable<char>`.

-   Compile-time type determines all the actions taken by the compiler, like method call resolution, overload resolution, and available implicit and explicit casts.
-   Run-time type determines all actions that are resolved at run time, like dispatching virtual method calls, evaluating `is` and `switch` expressions, and other type testing APIs.

### Custom types

How to choose which one to use

-   If the data storage size is small, no more than 64 bytes, choose `struct` or `record struct`.
-   If the type is immutable, or you want nondestructive mutation (create a new instance of object with modified values, instead of directly modifying the original instance), choose `struct` or `record struct`.
-   If your type should have value semantics for equality (two instances are considered equal if their values are the same), choose `record class` or `record struct`.
-   If the type is primarily used for storing data, not behavior, choose a `record class` or `record struct`.
-   If the type is part of an inheritance hierarchy, choose a `record class` or `class`.
-   If the type uses polymorphism, choose a `class`.
-   If the primary purpose if behavior, choose a `class`.

Summary of above

-   Classes typpically store data that is intended to be modifed after a class object is created.
-   Structs are best suited for small data structures, that typically would not be modifed after the struct is created.
-   Records typpically store data that isn't instended to be modified after object is created. And they are mostly used to checking value equality, since records modify `Equals` and `GetHashCode`, and two records are equal if all their properties have the same values.
