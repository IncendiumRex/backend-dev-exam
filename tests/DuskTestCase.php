<?php

namespace Tests;

use Facebook\WebDriver\Chrome\ChromeOptions;
use Facebook\WebDriver\Remote\DesiredCapabilities;
use Facebook\WebDriver\Remote\RemoteWebDriver;
use Illuminate\Support\Collection;
use Laravel\Dusk\TestCase as BaseTestCase;
use PHPUnit\Framework\Attributes\BeforeClass;

//I had to copy this from one of the tutorial vids by typing it out. Commented out code at the bottom wasnt working when --headless was removed.
abstract class DuskTestCase extends BaseTestCase
{
    use CreatesApplication;
    //@return void
    public static function prepare()
    {
        static::startChromeDriver();
        //static::startChromeDriver(['--port=9515']);
    }
    //@return \Facebook\WebDriver\Remote\RemoteWebDriver
    protected function driver()
    {
        $options = (new ChromeOptions)->addArguments([
            '--disable-gpu',
            //'--headless',
            '--window-size=1920,1080',
        ]);
        return RemoteWebDriver::create(
            'http://localhost:9515', DesiredCapabilities::chrome()->setCapability(
            ChromeOptions::CAPABILITY, $options
        )
            );
    }
}
    /**
     * Prepare for Dusk test execution.
     */
//    #[BeforeClass]
//    public static function prepare(): void
//    {
//        if (! static::runningInSail()) {
//            static::startChromeDriver(['--port=9515']);
//        }
//    }

    /**
     * Create the RemoteWebDriver instance.
     */
//    protected function driver(): RemoteWebDriver
//    {
//        $options = (new ChromeOptions)->addArguments(collect([
//            $this->shouldStartMaximized() ? '--start-maximized' : '--window-size=1920,1080',
//            '--disable-search-engine-choice-screen',
//            '--disable-smooth-scrolling',
//        ])->unless($this->hasHeadlessDisabled(), function (Collection $items) {
//            return $items->merge([
//                '--disable-gpu',
//                '--headless=new',
//            ]);
//        })->all());
//
//        return RemoteWebDriver::create(
//            $_ENV['DUSK_DRIVER_URL'] ?? env('DUSK_DRIVER_URL') ?? 'http://localhost:9515',
//            DesiredCapabilities::chrome()->setCapability(
//                ChromeOptions::CAPABILITY, $options
//            )
//        );
//    }
//}
