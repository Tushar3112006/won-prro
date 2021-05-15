function Stone(){
    if(frameCount% 150 === 0){
        stone = createSprite(200,displayHeight-100);
        stone.x = Math.round (random (300,displayWidth-200));
        stone.addImage("stone",stoneimg);
        stone.scale =2;
        stone.velocityX = -2;
        stonegroup.add(stone);
    }
}