<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTableColors extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('colors', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('rgb');
            $table->string('hexa');
            $table->unsignedBigInteger('webs_id')->nullable();
            $table->foreign('webs_id')->references('id')->on('webs');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('colors');
    }
}
