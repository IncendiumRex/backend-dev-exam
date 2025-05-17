<?php

namespace Tests\Browser;

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class loginTest extends DuskTestCase
{
    /**
     * A basic browser test example.
     */
    public function testLogIn()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/')
                    ->type('email','kirstin82@example.net')
                    ->type('password','password')
                    ->press('Sign In')
                    ->pause(5000)
                    ->assertSee('Products')
                    ->clickLink('Logout');
        });
    }

    public function testLogOut()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/')
                    ->type('email','kirstin82@example.net')
                    ->type('password','password')
                    ->press('Sign In')
                    ->pause(5000)
                    ->clickLink('Logout')
                    ->pause(5000)
                    ->assertSee('Remember Me');
        });
    }

    public function testLogEmpty()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/')
                    ->press('Sign In')
                    ->pause(5000)
                    ->assertSee('The email field is required')
                    ->assertSee('The password field is required');
        });
    }

    public function testWrngPass()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/')
                    ->type('email','kirstin82@example.net')
                    ->type('password','123456')
                    ->press('Sign In')
                    ->pause(5000)
                    ->assertSee('These credentials do not match our records');
        });
    }    
}
