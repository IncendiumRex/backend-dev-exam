<?php

namespace Tests\Browser;

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class createTest extends DuskTestCase
{
    public function testProject()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/')
                    ->type('email','kirstin82@example.net')
                    ->type('password','password')
                    ->press('Sign In')
                    ->pause(5000)
                    //->click('.btn.btn-primary.btn-round.float-right')
                    ->clickLink('Create')
                    ->pause(5000)
                    ->assertSee('Product Create');
        });
    }
}
