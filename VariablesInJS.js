function example() {
    var x = 10;
    if (1) {
        var x = 30;
        console.log(x);
    }
    console.log(x);
}
example();

/*

var (JavaScript) ≈ Function-scoped variables in Java
let (JavaScript) ≈ Block-scoped variables in Java
const (JavaScript) ≈ final variables in Java

/*
public class Example {
    public static void main(String[] args) {
        int x = 10;
        if (true) {
            int x = 20; // ❌ Error: Variable 'x' is already defined
            System.out.println(x);
        }
        System.out.println(x);
    }
}  */
