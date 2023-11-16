
//temp













//%%html
//<script id="my-vertex-shader" type="x-shader/x-vertex">
precision mediump float;

attribute  vec3 in_Position;
attribute  vec3 in_Color;
uniform mat4 MVP;


varying  vec3 ex_Color;


void main(void) {
// CHECK  
    gl_Position = MVP * vec4(in_Position.x, in_Position.y, in_Position.z, 1.0);

    ex_Color = in_Color;
}
//</script>



// <script>
class espada extends CGRAobject{
    constructor(glcontext, colors = []){   
    super(glcontext);
        
        this.pega = new cilindro(this.gl,colors);
        this.lam = new cone(this.gl,colors);
        
        // cil
        var scale = glm.scale(glm.vec3(0.08,0.08,1));
        var transl = glm.translate(glm.mat4(1.0),glm.vec3(0,0.0,-0.5));
        this.modelpega = transl['*'](scale);
        // cone
        var scale5 = glm.scale(glm.vec3(0.3,0.08,2.5));
        var trans5 = glm.translate(glm.mat4(1.0),glm.vec3(0,0.0,0.5));
        this.modellam = trans5['*'](scale5);
        
    } 
    
    setShader(shader){
        this.pega.setShader(shader);
        this.lam.setShader(shader);

    }
    
    setModelTransformation(transform){
        this.pega.setModelTransformation(glm.mat4(transform['*'](this.modelpega)));
        this.lam.setModelTransformation(glm.mat4(transform['*'](this.modellam)));

    }
    
    drawit(view,proj){
        this.pega.drawit(view,proj);
        this.lam.drawit(view,proj);

    }
    
}
//</script>














// 
class pend extends CGRAobject{
    constructor(glcontext, colors = []){   
    super(glcontext);
        
        this.pen = new cilindro(this.gl,colors);
        this.pen2 = new esfera(this.gl,colors);
               
        // cil
        var scale = glm.scale(glm.vec3(0.05,0.05,2));
        var transl = glm.translate(glm.mat4(1.0),glm.vec3(0,0,0.3));
        this.modelpen = glm.mat4(transl['*'](scale));
      
        // esf
        var scale5 = glm.scale(glm.vec3(0.3,0.3,0.3));
        var trans5 = glm.translate(glm.mat4(1.0),glm.vec3(0,0,0.3));
        this.modelpen2 = glm.mat4(trans5['*'](scale5));
    }   
    
    setShader(shader){
        this.pen.setShader(shader);
        this.pen2.setShader(shader);
    }
    
    setModelTransformation(transform){
        this.pen.setModelTransformation(glm.mat4(transform['*'](this.modelpen)));
        this.pen2.setModelTransformation(glm.mat4(transform['*'](this.modelpen2)));          

    }
    
    drawit(view,proj){
    
        this.pen2.drawit(view,proj);
    
        this.pen.drawit(view, proj);
    }
    
       
}
// </script>













class SolarS extends CGRAobject{
    constructor(glcontext, color = []){    
    super(glcontext);
        
        this.sol = new esfera(this.gl,[1,0,0]);
        this.mercurio = new esfera(this.gl,[1,0,0]);
        this.venus=  new esfera(this.gl,[1,0,1]);
        this.terra =  new esfera(this.gl,[1,0,1]);
        this.marte =  new esfera(this.gl,[1,0,1]);
        this.jupiter =  new esfera(this.gl,[1,0,1]);
        this.saturno = new esfera(this.gl,[1,0,1]);
        this.urano =  new esfera(this.gl,[1,0,1]);
        this.neptuno =  new esfera(this.gl,[1,0,1]); 
        
         // sol
        const scal = 5;
        const tam = 0.08;
        this.scaleSol = glm.mat4(glm.mat3(tam));
        this.modelSol = this.scaleSol;
       
        // mercurio
        this.dayMercurio = -2 * Math.PI / (58.6 * 24);
        this.angleMercurio = 2 * Math.PI / (88.0 * 24);
        this.scaleMercurio = glm.mat4(glm.mat3(scal*tam*0.0045)); 
        this.modelMercurio = this.scaleMercurio;
              
         // venus
        this.angleVenus = 2 * Math.PI / (224.7 * 24 );
        this.dayVenus = 2 * Math.PI / (243 * 24 );
        this.scaleVenus = glm.mat4(glm.mat3(scal*tam*0.0097));
        this.modelVenus =this.scaleVenus;
        
         // terra
        this.angleTerra = 2 * Math.PI / (365.26*24);
        this.dayTerra = 2 * Math.PI / (24);
        this.scaleTerra = glm.mat4(glm.mat3(scal*tam*0.0102));
        this.modelTerra =this.scaleTerra;
        
         // marte
         this.angleMarte = 2 * Math.PI / (1.88*365 * 24);
        this.dayMarte = 2 * Math.PI / (1.03 * 24);
        this.scaleMarte = glm.mat4(glm.mat3(scal*tam*0.0059));
        this.modelMarte =this.scaleMarte;
        
         // jupiter
        this.angleJupiter = 2 * Math.PI / (11.86*365 * 24 );  
        this.dayJupiter = 2 * Math.PI / (0.41 * 24 );
        this.scaleJupiter = glm.mat4(glm.mat3(scal*tam*0.102));
        this.modelJupiter =this.scaleJupiter;
        
         // saturno 
        this.angleSaturno = 2 * Math.PI / (29.46*365 * 24);
        this.daySaturno = 2 * Math.PI / (0.44 * 24);
        this.scaleSaturno = glm.mat4(glm.mat3(scal*tam*0.0866));
        this.modelSaturno =this.scaleSaturno;
        
         // urano
        this.angleUrano = 2 * Math.PI / (84.01*365 * 24 );  
        this.dayUrano =  2 * Math.PI / (0.72 * 24 );
        this.scaleUrano = glm.mat4(glm.mat3(scal*tam*0.0367));
        this.modelUrano =this.scaleUrano;
        
          // neptuno
        this.angleNeptuno =2 * Math.PI / (164.79*365 * 24);
        this.dayNeptuno = 2 * Math.PI / (0.67 * 24);
        this.scaleNeptuno = glm.mat4(glm.mat3(scal*tam*0.0356));
        this.modelNeptuno =this.scaleNeptuno;  
        
    }
    
    //this function is capable to change the form of the planets
    
    updatePlanet(form) {
        if (form == 49) {
            this.sol = new esfera(this.gl);
            this.mercurio = new esfera(this.gl);
            this.venus=  new esfera(this.gl);
            this.terra =  new esfera(this.gl);
            this.marte =  new esfera(this.gl);
            this.jupiter =  new esfera(this.gl);
            this.saturno = new esfera(this.gl);
            this.urano =  new esfera(this.gl);
            this.neptuno =  new esfera(this.gl);
        } else if (form == 50) {
            this.sol = new cubo(this.gl);
            this.mercurio = new cubo(this.gl);
            this.venus=  new cubo(this.gl);
            this.terra =  new cubo(this.gl);
            this.marte =  new cubo(this.gl);
            this.jupiter =  new cubo(this.gl);
            this.saturno = new cubo(this.gl);
            this.urano =  new cubo(this.gl);
            this.neptuno =  new cubo(this.gl);
        } else if (form == 51) {
            this.sol = new cilindro(this.gl);
            this.mercurio = new cilindro(this.gl);
            this.venus=  new cilindro(this.gl);
            this.terra =  new cilindro(this.gl);
            this.marte =  new cilindro(this.gl);
            this.jupiter =  new cilindro(this.gl);
            this.saturno = new cilindro(this.gl);
            this.urano =  new cilindro(this.gl);
            this.neptuno =  new cilindro(this.gl);
        } else if (form == 52) {
            this.sol = new cone(this.gl);
            this.mercurio = new cone(this.gl);
            this.venus=  new cone(this.gl);
            this.terra =  new cone(this.gl);
            this.marte =  new cone(this.gl);
            this.jupiter =  new cone(this.gl);
            this.saturno = new cone(this.gl);
            this.urano =  new cone(this.gl);
            this.neptuno =  new cone(this.gl);
        } else {
            console.log('app key='+ this.key)
        } 
    }
    
    setShader(shader){
        this.sol.setShader(shader);
        this.mercurio.setShader(shader);
        this.venus.setShader(shader);
        this.terra.setShader(shader);
        this.marte.setShader(shader);
        this.jupiter.setShader(shader);
        this.saturno.setShader(shader);
        this.urano.setShader(shader);
        this.neptuno.setShader(shader);

    }
    //For the orbiting movement of the object we acept the counter of the render
    //into the funtion so each planet has its own orbit calculated 
    
    setModelTransformation(count){
        
         // sol
        var rotation = glm.rotate(glm.mat4(1.0),this.dayMercurio,glm.vec3(0,0,1));
        this.modelSol = rotation['*'](this.scaleSol);
        this.sol.setModelTransformation(this.modelSol);
        
         // Mercurio
        var rotation = glm.rotate(glm.mat4(1.0),(count*this.dayMercurio),glm.vec3(0,0,1));
        var transl= glm.translate(glm.mat4(1.0), glm.vec3(Math.cos(
            count*this.angleMercurio)*0.086,Math.sin(count*this.angleMercurio)*0.086,0));
        this.modelMercurio = transl['*'](rotation['*'](this.scaleMercurio));
        this.mercurio.setModelTransformation(this.modelMercurio);
      
        // Venus
        count += 68965;
        var rotation = glm.rotate(glm.mat4(1.0),count*this.dayVenus,glm.vec3(0,0,1));
        var transl= glm.mat4(glm.translate(glm.mat4(1.0), glm.vec3(Math.cos(
            count*this.angleVenus)*0.096,Math.sin(count*this.angleVenus)*0.096,0)));
        this.modelVenus = transl['*'](rotation['*'](this.scaleVenus));
        this.venus.setModelTransformation(this.modelVenus);
        
        // Terra
        count += 45;
        var rotation = glm.rotate(glm.mat4(1.0),count*this.dayTerra,glm.vec3(0,0,1));
        var transl= glm.mat4(glm.translate(glm.mat4(1.0), glm.vec3(Math.cos(
            count*this.angleTerra)*0.109,Math.sin(count*this.angleTerra)*0.109,0)));
        this.modelTerra = transl['*'](rotation['*'](this.scaleTerra));
        this.terra.setModelTransformation(this.modelTerra);
        
        // Marte
        count += 864;
        var rotation = glm.rotate(glm.mat4(1.0),count*this.dayMarte,glm.vec3(0,0,1));
        var transl= glm.mat4(glm.translate(glm.mat4(1.0), glm.vec3(Math.cos(
            count*this.angleMarte)*0.128,Math.sin(count*this.angleMarte)*0.128,0)));
        this.modelMarte = transl['*'](rotation['*'](this.scaleMarte));
        this.marte.setModelTransformation(this.modelMarte);
        
        // Jupiter
        count += 1000;
        var rotation = glm.rotate(glm.mat4(1.0),count*this.dayJupiter,glm.vec3(0,0,1));
        var transl= glm.mat4(glm.translate(glm.mat4(1.0), glm.vec3(Math.cos(
            count*this.angleJupiter)*0.192,Math.sin(count*this.angleJupiter)*0.192,0)));
        this.modelJupiter = transl['*'](rotation['*'](this.scaleJupiter));
        this.jupiter.setModelTransformation(this.modelJupiter);
        
        // Saturno
        count += 80000;
        var rotation = glm.rotate(glm.mat4(1.0),count*this.daySaturno,glm.vec3(0,0,1));
        var transl= glm.mat4(glm.translate(glm.mat4(1.0), glm.vec3(Math.cos(
            count*this.angleSaturno)*0.290,Math.sin(count*this.angleSaturno)*0.290,0)));
        this.modelSaturno = transl['*'](rotation['*'](this.scaleSaturno));
        this.saturno.setModelTransformation(this.modelSaturno);
        
        // Urano 
        count += 67000;
        var rotation = glm.rotate(glm.mat4(1.0),count*this.dayUrano,glm.vec3(0,0,1));
        var transl= glm.mat4(glm.translate(glm.mat4(1.0), glm.vec3(Math.cos(
            count*this.angleUrano )*0.350,Math.sin(count*this.angleUrano )*0.350,0)));
        this.modelUrano  = transl['*'](rotation['*'](this.scaleUrano));
        this.urano.setModelTransformation(this.modelUrano);
        
        // Neptuno
        count += 540002;
        var rotation = glm.rotate(glm.mat4(1.0),count*this.dayNeptuno,glm.vec3(0,0,1));
        var transl= glm.mat4(glm.translate(glm.mat4(1.0), glm.vec3(Math.cos(
            count*this.angleNeptuno)*0.390,Math.sin(count*this.angleNeptuno)*0.390,0)));
        this.modelNeptuno = transl['*'](rotation['*'](this.scaleNeptuno));
        this.neptuno.setModelTransformation(this.modelNeptuno);
        
    }
    
    
    drawit(view,proj){
        this.sol.drawit(view,proj);
        this.mercurio.drawit(view,proj);
        this.venus.drawit(view,proj);
        this.terra.drawit(view,proj);
        this.marte.drawit(view,proj);
        this.jupiter.drawit(view,proj);
        this.saturno.drawit(view,proj);
        this.urano.drawit(view,proj);
        this.neptuno.drawit(view,proj);
    }
}










class museum extends CGRAobject{
    constructor(glcontext, color = []){    
    super(glcontext);
        
         //floor
        this.floor = new cubo(this.gl,[1,1,0]);
        var scale = glm.scale(glm.vec3(3.8,1.8,0.1));
        var transl= glm.mat4(glm.translate(glm.mat4(1.0), glm.vec3(0,0,-0.9)));
        this.modelfloor = transl['*'](scale);
            
        //////////walls
        this.lwall = new cubo(this.gl,[0.7,0.5,0.3]);
        var scale = glm.scale(glm.vec3(4,0.1,1.8));
        var transl= glm.mat4(glm.translate(glm.mat4(1.0), glm.vec3(0,-2,0)));
        this.modellwall = transl['*'](scale);
        
        this.rwall = new cubo(this.gl,[0.7,0.5,0.3]);
        var scale = glm.scale(glm.vec3(4,0.1,1.8));
        var transl= glm.mat4(glm.translate(glm.mat4(1.0), glm.vec3(0,2,0)));
        this.modelrwall = transl['*'](scale);
    
        this.bwall = new cubo(this.gl,[0.7,0.5,0.3]);
        var scale = glm.scale(glm.vec3(0.1,1.8,1.8));
        var transl= glm.mat4(glm.translate(glm.mat4(1.0), glm.vec3(-3.8,0,0)));
        this.modelbwall = transl['*'](scale);
        
        //////////tables
        this.table = new cubo(this.gl,[0,0,1]);
        var scale = glm.mat4(glm.mat3(0.2));
        var transl= glm.mat4(glm.translate(glm.mat4(1.0), glm.vec3(0,0,-0.7)));
        this.tablemodel = transl ['*'](scale);
        
        this.tablel = new cubo(this.gl,[0,0,1]);
        var scale = glm.mat4(glm.mat3(0.2));
        var transl= glm.mat4(glm.translate(glm.mat4(1.0), glm.vec3(0,1.8,-0.7)));
        this.ltablemodel = transl ['*'](scale);
        
        this.tabler = new cubo(this.gl,[0,0,1]);
        var scale = glm.mat4(glm.mat3(0.2));
        var transl= glm.mat4(glm.translate(glm.mat4(1.0), glm.vec3(0,-1.8,-0.7)));
        this.rtablemodel = transl ['*'](scale);
        
        this.tablef = new cubo(this.gl,[0,0,1]);
        var scale = glm.mat4(glm.mat3(0.2));
        this.ftablemodel = glm.mat4(glm.translate(glm.mat4(1.0), glm.vec3(-1.8,0,-0.7)))['*'](scale);
        
        //////////objects
        this.object = new pend(this.gl,[0,0,1]);
        this.objectmodel = glm.mat4(glm.mat3(0.8));
        this.object.setModelTransformation(this.objectmodel);
        
        this.object2= new sat(this.gl,[0,0,1]);
        this.object2model = glm.mat4(glm.mat3(0.8));
       
        
        this.object3= new espada(this.gl,[0,0,1]);
        this.object3model = glm.mat4(glm.mat3(0.8));
       
          
    }
    
    setShader(shader){
        this.rwall.setShader(shader);
        this.lwall.setShader(shader);
        this.bwall.setShader(shader);
        this.table.setShader(shader);
        this.tablel.setShader(shader);
        this.tabler.setShader(shader);
        this.tablef.setShader(shader);
        this.floor.setShader(shader);
        this.object.setShader(shader);
        this.object2.setShader(shader);
        this.object3.setShader(shader);
    }
    
    rotate(counter){
        //every transformation is encoded in the model and then passed to the 
        //transformation function as tranform(or mvp in older versions) to multiply with the actual object model
        //2 translations(to 0point and to the table again) were made previously with a rotation between them but no results were shown
        
        var rot = glm.rotate(glm.mat4(1.0),glm.radians(-counter),glm.vec3(0.0,0.0,1.0));
        var transl =  glm.translate(glm.mat4(1.0), glm.vec3(-1.80,0,0.3));
        this.objectmodel = transl ['*'](rot);
        this.object.setModelTransformation(this.objectmodel);
        
        var transl2 =  glm.translate(glm.mat4(1.0), glm.vec3(0,1.8,0.3));
        this.object2model = transl2 ['*'](rot);
        this.object2.setModelTransformation(this.object2model);
        
        var transl3 =  glm.translate(glm.mat4(1.0), glm.vec3(0,-1.8,0.3));
        this.object3model = transl3 ['*'](rot);
        this.object3.setModelTransformation(this.object3model);    
    }
    
    setModelTransformation(){
        this.floor.setModelTransformation(this.modelfloor);
        this.bwall.setModelTransformation(this.modelbwall);
        this.rwall.setModelTransformation(this.modelrwall);
        this.lwall.setModelTransformation(this.modellwall);
        this.tablel.setModelTransformation(this.ltablemodel);
        this.tabler.setModelTransformation(this.rtablemodel);
        this.tablef.setModelTransformation(this.ftablemodel);
        this.table.setModelTransformation(this.tablemodel);
        this.object.setModelTransformation(this.objectmodel);
        this.object2.setModelTransformation(this.object2model);
        this.object3.setModelTransformation(this.object3model);
        
    }   
    drawit(view,proj){
        this.floor.drawit(view,proj);
        this.bwall.drawit(view,proj);
        this.rwall.drawit(view,proj);
        this.lwall.drawit(view,proj);
        this.table.drawit(view,proj);
        this.tablel.drawit(view,proj);
        this.tabler.drawit(view,proj);
        this.tablef.drawit(view,proj);
        this.object.drawit(view,proj);
        this.object2.drawit(view,proj);
        this.object3.drawit(view,proj);
    }












//
 
var color = [1.0, 0.0, 0.0,
    0.0, 1.0, 0.0,
    0.0, 0.0, 1.0];









// %%js

class triangle extends CGRAobject{
    constructor(glcontext){
        super(glcontext); // initialize the parent class
        
        this.numvertices = 3;
        var vertices =
            [ -0.90, -0.90, 0.9 ,
                0.90, -0.90, 0.9 ,
                -0.90,  0.90, 0.9]; 
        
        var colors = [
            1.0, 0.0, 0.0, 
            0.0, 1.0, 0.0,
            0.0, 0.0, 1.0];
        
        this.vertexbuffer=this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vertexbuffer);    
        // as JS stores everything in 64 bit format and GL expects 32bits...
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(vertices), this.gl.STATIC_DRAW);

        this.colorbuffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colorbuffer);    
        // as JS stores everything in 64 bit format and GL expects 32bits...
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(colors), this.gl.STATIC_DRAW);
    }
}

class triangleT extends triangle{
    
    constructor(glcontext){
        super(glcontext);
            var texcoords = [
                0.0, 0.0,
                1.0, 0.0,
                0.0, 1.0 ];
        
            this.texcoordbuffer = this.gl.createBuffer();
            this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.texcoordbuffer);    
            this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(texcoords), this.gl.STATIC_DRAW);
    }
        
    settexture(cgratex){
            this.textureid = cgratex.textureid;
    }
    
    drawit(viewMat, projectionMat){
        this.shaderprog.startUsing();
        this.texcoordsLocation = this.gl.getAttribLocation(this.shaderprog.shaderProgram,
                                                            "in_texcoords");
        
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.texcoordbuffer);
        this.gl.vertexAttribPointer(this.texcoordsLocation, // Attribute location
                            2, // number of elements per attribute
                            this.gl.FLOAT,  // Type of elements
                            false,  // 
                            0, //2*Float32Array.BYTES_PER_ELEMENT, // size of a vertex in bytes 
                            0); // Offset from the begining of a single vertex to this attribute
        this.gl.enableVertexAttribArray(this.texcoordsLocation);
        this.gl.bindTexture(this.gl.TEXTURE_2D, this.textureid);
        this.texturelocation =  this.gl.getUniformLocation(this.shaderprog.shaderProgram, "uSampler");
        this.gl.uniform1i(this.textureLocation, 0);
        
        // the parent method does the rest
        super.drawit(viewMat,projectionMat);
    }    
}

class triangleC extends triangle{
    
    constructor(glcontext){
        super(glcontext);
        this.color=glm.vec3(0,1,0);
    }
        
    setcolor(color){
            this.color = glm.vec3(color);
    }
    
    drawit(viewMat, projectionMat){
        this.shaderprog.startUsing();
        var colorLocation = this.gl.getUniformLocation(this.shaderprog.shaderProgram,
                                                            "un_Color");    
        this.gl.uniform3fv(colorLocation, this.color.array);
        
        // the parent method does the rest
        super.drawit(viewMat,projectionMat);
    }    
}






































































