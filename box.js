class Box{
    constructor(x,y,width,height){
        var options = {
            restitution :0.1,
            friction:1,
            density:0.04
        }

this.width  =width
this.height = height
this.body = Bodies.rectangle (x, y,width ,height , options )
World.add(world , this.body)



    }

    display(){
        var pos = this.body.position 
        var angle= this.body.angle
        push () 
        translate (pos.x , pos.y)
        rotate(angle)
        stroke ("red")
        
        fill ("yellow")
        rectMode (CENTER)
        
 rect(0,0, this.width , this.height)
 pop ()
    }
}