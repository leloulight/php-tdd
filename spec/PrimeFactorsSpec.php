<?php

namespace spec;

use PhpSpec\ObjectBehavior;
use Prophecy\Argument;

class PrimeFactorsSpec extends ObjectBehavior
{

    /** @test */

    public function it_returns_an_empty_array_for_1()
    {
       return [1];
    }

}
