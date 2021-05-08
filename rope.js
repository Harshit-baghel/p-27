class Rope{
constructor(bodyA,bodyB,offsetx,offsety){
    this.offsetx=offsetx;
    this.offsety=offsety;
    var options={
        bodyA:bodyA,
        bodyB:bodyB,
pointB:{x:this.offsetx,y:this.offsety},

    }
    
    this.sling=Constraint.create(options)
    World.add(world,this.sling)
}
display(){
    
   var pointA=this.sling.bodyA.position;
   var pointB=this.sling.bodyB.position;
   strokeWeight(4);
   var anchorx=pointB.x+this.offsetx
   var anchory=pointB.y+this.offsety
   line(pointA.x,pointA.y,anchorx,anchory)

}
}