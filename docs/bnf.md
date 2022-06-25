# [Backus–Naur Form (BNF)]
> [John Backus](https://en.wikipedia.org/wiki/John_Backus) was a program language designer who devised a notation to document IAL (an early implementation of Algol). [Peter Naur](https://en.wikipedia.org/wiki/Peter_Naur) later worked on Backus’ findings, and the notation was jointly credited to both computer scientists.
> 
La notación de Backus-Naur, también conocida por sus denominaciones inglesas Backus-Naur form (BNF), Backus-Naur formalism o Backus normal form, es un metalenguaje usado para expresar gramáticas libres de contexto: es decir, una manera formal de describir lenguajes formales.

Para abreviar, una notacion para describir la manera correcta de escribir en un lenguaje a un extraterrestre o, lo mas parecido a un extraterrestre en la tierra, un ordenador.

## Introduction
<details><summary>Click here to expand</summary>
</br>
BNF (Backus–Naur Form) is a context-free grammar commonly used by developers of programming languages to specify the syntax rules of a language. John Backus was a program language designer who devised a notation to document IAL (an early implementation of Algol). Peter Naur later worked on Backus’ findings, and the notation was jointly credited to both computer scientists.

BNF uses a range of symbols and expressions to create production rules. A simple BNF production rule might look like this:
```
    <digit> ::= 0|1|2|3|4|5|6|7|8|9
```
This would be interpreted as: a digit can be defined as 0, 1, 2, 3, 4, 5, 6, 7, 8, or 9

The chevrons `(< >)` are used to denote a non-terminal symbol. If a non-terminal symbol appears on the right side of the production rules, it means that there will be another production rule (or set of rules) to define its replacement. Consider the following production rule:
```
    <fullname> :: =<title><name><name>
```
This shows that full name comprises a title, a name, and another name. However, all three component parts are non-terminal. Therefore, further production rules are required. For example, a production rule may define title as follows:
```
    <title> :: =Mr|Mrs|Ms|Miss|Dr
```
In this rule, Mr, Mrs, Ms, Miss, and Dr are terminal symbols. They are not enclosed in chevrons so they are the actual values that are allowed for title. The pipe symbol | is a metacharacter that is used to denote alternatives. Each production rule will be strictly applied; you may know that other titles exist, for example Lord, but the production rule alone determines the valid options for use in this particular formal language.

Production rules for something as complex as the syntax of a language, will come as a very large set of BNF statements that specify how every aspect of the language is defined. Whenever you find a non-terminal symbol on the right side of a production rule, there should be another rule that has the symbol on the left side. This continues until everything can be specified in relation to terminal symbols.

Here is a complete set of rules (for a small subset of a programming language):
```
    <addition> ::= <number>+<number>
    <number> ::= <sign><integer>|<integer>
    <integer> ::= <digit>|<digit><integer>
    <digit>::=0|1|2|3|4|5|6|7|8|9
    <sign> ::= +|-
```
Terminal symbols are the digits 0–9, and the plus and minus signs. Note that the plus sign appears twice, once as an operator and once as the sign for a number. A valid addition statement could have a double plus sign, e.g. 23 + +6
</details>

## Recursion in BNF production rules

## Backus–Naur Form Grammar for Valid SemVer Versions

```
<valid semver> ::= <version core>
                 | <version core> "-" <pre-release>
                 | <version core> "+" <build>
                 | <version core> "-" <pre-release> "+" <build>

<version core> ::= <major> "." <minor> "." <patch>

<major> ::= <numeric identifier>

<minor> ::= <numeric identifier>

<patch> ::= <numeric identifier>

<pre-release> ::= <dot-separated pre-release identifiers>

<dot-separated pre-release identifiers> ::= <pre-release identifier>
                                          | <pre-release identifier> "." <dot-separated pre-release identifiers>

<build> ::= <dot-separated build identifiers>

<dot-separated build identifiers> ::= <build identifier>
                                    | <build identifier> "." <dot-separated build identifiers>

<pre-release identifier> ::= <alphanumeric identifier>
                           | <numeric identifier>

<build identifier> ::= <alphanumeric identifier>
                     | <digits>

<alphanumeric identifier> ::= <non-digit>
                            | <non-digit> <identifier characters>
                            | <identifier characters> <non-digit>
                            | <identifier characters> <non-digit> <identifier characters>

<numeric identifier> ::= "0"
                       | <positive digit>
                       | <positive digit> <digits>

<identifier characters> ::= <identifier character>
                          | <identifier character> <identifier characters>

<identifier character> ::= <digit>
                         | <non-digit>

<non-digit> ::= <letter>
              | "-"

<digits> ::= <digit>
           | <digit> <digits>

<digit> ::= "0"
          | <positive digit>

<positive digit> ::= "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"

<letter> ::= "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H" | "I" | "J"
           | "K" | "L" | "M" | "N" | "O" | "P" | "Q" | "R" | "S" | "T"
           | "U" | "V" | "W" | "X" | "Y" | "Z" | "a" | "b" | "c" | "d"
           | "e" | "f" | "g" | "h" | "i" | "j" | "k" | "l" | "m" | "n"
           | "o" | "p" | "q" | "r" | "s" | "t" | "u" | "v" | "w" | "x"
           | "y" | "z"
```