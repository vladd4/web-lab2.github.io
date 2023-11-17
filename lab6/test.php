<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Check if the required POST parameters are set
    if (isset($_POST["title"]) && isset($_POST["description"])) {
        $title = $_POST["title"];
        $description = $_POST["description"];

        // Read existing data from the file, if any
        $file_path = 'data.json';
        $existing_data = file_exists($file_path) ? json_decode(file_get_contents($file_path), true) : [];

        // Add the new data to the array
        $new_data = array(
            'title' => $title,
            'description' => $description
        );

        $existing_data[] = $new_data;

        // Encode the entire array and write it back to the file
        $json_data = json_encode($existing_data, JSON_PRETTY_PRINT);
        file_put_contents($file_path, $json_data);

        // Redirect to index2.html
        header("Location: index2.html");
        exit(); // Make sure to exit after the header redirect
    } else {
        echo "Error: 'title' and 'description' parameters are required.";
    }
}   
?>
