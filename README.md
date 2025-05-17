Hello! :)
    
    I am not at all familiar with Laravel or Laravel Dusk and I had issues with getting it installed or to run but I managed to make a few tests with it. I think there was an issue with DuskTestCase.php as running the tests would give me exception errors when I would comment out --headless. Credentials used were kirstin82@example.net with password.
        * loginTest.php tests Logins as well as entering incorrect credentials
        * videoTest.php tests to see if the links work as well as if the video file displayed changes
        * createTest.php just tests if the Create button works and moves you
    
    With Playwright, however, I think I managed to exhaustively test the sample project. I used the Playwright extension for VSCode and got all tests to run on both Chromium and FireFox. Although, some video formats dont work on Chromium. Also come w/ CI/CD for Playwright.
        * 1login.spec.js tests everything around logging in 
        * 2denylogin.spec.js tests everything around logging in with the wrong credentials
        * 3logout.spec.js just tests if the logout button works after logging in
        *4products.spec.js tests everything around creating products, searching for products, and sorting the product list
        *5videos.spec.js tests to see if the links work as well as if the video file displayed changes
    
    Thank you for your time! <3
        
### System Specifications
| Requirements | Versions I used |
|   LARAVEL    | 10.21           |
|     PHP      | 8.2             |
|    MYSQL     | 8.0.42          |

## Configuration steps I took as instructed
1.  Clone this repository.

    ```bash
        $   git clone https://github.com/ericnicdao069/backend-dev-exam.git
    ```

2.  Recreate environment variable file.

    ```bash
        $   cp .env.example .env
    ```

3.  Install composer and npm.

    ```bash
        $   composer install && npm install
    ```

4.  Generate Application Key.

    ```bash
        $   php artisan key:generate
    ```

5.  Create your DB and update your DB configs in .env.

    ```bash
        $   DB_CONNECTION=mysql
        $   DB_HOST=127.0.0.1
        $   DB_PORT=3306
        $   DB_DATABASE=laravel //changed to exam
        $   DB_USERNAME=root    //changed to sid
        $   DB_PASSWORD=        //changed to 123
    ```

6.  Execute Database Migration and Seeders.

    ```bash
        $   php artisan migrate --seed
    ```

7.  Create a symlink for Storage in Public Directory.

    ```bash
        $   php artisan storage:link
    ```

8.  Generate Ziggy routes.

    ```bash
        $   php artisan ziggy:generate
    ```

9.  Run local server.

    ```bash
        $   php artisan serve
    ```

10.  Front Build.

    ```bash
        $   npm run dev
        $   npm run build
    ```
