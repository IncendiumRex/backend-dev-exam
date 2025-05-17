<?php

namespace Tests\Browser;

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class videoTest extends DuskTestCase
{
    /**
     * A basic browser test example.
     */
    public function testVideos()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/')
                    ->type('email','kirstin82@example.net')
                    ->type('password','password')
                    ->press('Sign In')
                    ->pause(5000)
                    ->clickLink('Videos')
                    ->assertAttribute('#vjs_video_3_html5_api', 'src', '/assets/videos/test.mp4')
                    ->clickLink('Logout');
        });
    }

        public function testVideos2()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/')
                    ->type('email','kirstin82@example.net')
                    ->type('password','password')
                    ->press('Sign In')
                    ->pause(5000)
                    ->clickLink('Videos')
                    ->clickLink('test2.webm')
                    ->assertAttribute('#vjs_video_3_html5_api', 'src', '/assets/videos/test2.webm')
                    ->clickLink('Logout');
        });
    }

        public function testVideos3()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/')
                    ->type('email','kirstin82@example.net')
                    ->type('password','password')
                    ->press('Sign In')
                    ->pause(5000)
                    ->clickLink('Videos')
                    ->clickLink('test3.mp4')
                    ->assertAttribute('#vjs_video_3_html5_api', 'src', '/assets/videos/test3.mp4')
                    ->clickLink('Logout');
        });
    }

}