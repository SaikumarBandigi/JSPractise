class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}

function myFunction() {
    throw new CustomError("This is a custom exception");
}

try {
    myFunction();
} catch (error) {
    if (error instanceof CustomError) {
        console.error("Caught a custom error:", error.message);
    } else {
        console.error("Caught an unexpected error:", error.message);
    }
}
