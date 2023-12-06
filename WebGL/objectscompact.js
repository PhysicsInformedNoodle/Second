%%js
////////////////////////////////////////
//////////TRIANGLE//////////////////////////////
////////////////////////////////////////
class triangle extends CGRAobject{
    constructor(glcontext){
        super(glcontext); // initialize the parent class
        
        
        this.numvertices = 3;
        var vertices = [ 
            //Triangle1
            0.0, 0.0, 0.0 , 
            1.00, 0.00, 0.00 , 
            0.00,  1.00, 0.00,
            ];
        
        var colors = [
            //Triangle1
            1.0, 0.0, 0.0, 
            0.0, 1.0, 0.0,
            0.0, 0.0, 1.0,];
        
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

class square extends CGRAobject{
    constructor(glcontext){
        super(glcontext); // initialize the parent class
         
        // We need 6 vertices for 2 triangles to represent a square
        this.numvertices = 6;
        let r = 0.5
        var vertices = [
            -r, -r, 0,
            -r, r, 0, 
            r,  r, 0, 
            
            -r, -r, 0, 
            r,  -r, 0, 
            r,  r, 0  
        ];
           
////////////////////////////////////////
//////////COLORS+ET+AL//////////////////////////////
////////////////////////////////////////
        var colors = [
            1.0, 0.0, 0.0, 
            0.0, 1.0, 0.0,
            0.0, 0.0, 1.0,
            
            1.0, 0.0, 0.0,
            0.0, 1.0, 0.0,
            0.0, 0.0, 1.0
        ];
////////////////////////////////////////////////////////
        this.vertexbuffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vertexbuffer);    
        // as JS stores everything in 64 bit format and GL expects 32bits...
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(vertices), this.gl.STATIC_DRAW);

        this.colorbuffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colorbuffer);    
        // as JS stores everything in 64 bit format and GL expects 32bits...
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(colors), this.gl.STATIC_DRAW);
    }
}




////////////////////////////////////////
//////////TETRAHEDRON//////////////////////////////
////////////////////////////////////////
class tetrahedron extends CGRAobject{
    constructor(glcontext){
        super(glcontext); // initialize the parent class
        
        let base = 0.5;
        
        var vertices = [
            base, base, base,
            -1.0*base, base, base, 
            base, -1.0*base, base,
            
            -1.0*base, base, base, 
            base, -1.0*base, base, 
            base, base, -1.0*base,
            
            base, -1.0*base, base, 
            base, base, -1.0*base,
            base, base, base,
            
            base, base, -1.0*base,
            base, base, base,
            -1.0*base, base, base, 
        ];
        
        
        
        var colors = [
            1.0, 0.0, 0.0, 
            0.0, 1.0, 0.0,
            0.0, 0.0, 1.0,
            
            1.0, 0.0, 0.0, 
            0.0, 1.0, 0.0,
            0.0, 0.0, 1.0,
            
            1.0, 0.0, 0.0, 
            0.0, 1.0, 0.0,
            0.0, 0.0, 1.0,
            
            1.0, 0.0, 0.0,
            0.0, 1.0, 0.0,
            0.0, 0.0, 1.0
        ];
        
        
        this.numvertices = vertices.length/3;
        
        
        
        this.vertexbuffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vertexbuffer);    
        // as JS stores everything in 64 bit format and GL expects 32bits...
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(vertices), this.gl.STATIC_DRAW);

        this.colorbuffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colorbuffer);    
        // as JS stores everything in 64 bit format and GL expects 32bits...
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(colors), this.gl.STATIC_DRAW);
    }
}


////////////////////////////////////////
//////////DISK//////////////////////////////
////////////////////////////////////////
class disk extends CGRAobject{
    constructor(glcontext){
        super(glcontext); 
        //let numsides = 10;
        let origin = [0.0, 0.0, 0.0];
        
        //CREATES RADII
        let azimuth = [];
        for(let i=0; i<numsides+1; i+=1){
            azimuth.push([
                0.5*Math.cos(2*Math.PI*(i/numsides)),
                0.5*Math.sin(2*Math.PI*(i/numsides)),
                0
            ] )
        };
        
        //CREATES THE TRIANGLES
        var vertices = [];
        for(let i=0; i<numsides; i+=1){
            vertices = vertices.concat(origin).concat(azimuth[i]).concat(azimuth[i+1]);
        };
        
        
////////////////////////////////////////
//////////COLORS+ET+AL//////////////////////////////
////////////////////////////////////////
        var colors = [];
        while (colors.length < vertices.length) {
            colors.push(
                1, 0, 0, 
                0, 1, 0, 
                0, 0, 1
            );
        }
        this.numvertices = vertices.length / 3; 
////////////////////////////////////////////////////////
        this.vertexbuffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vertexbuffer);    
        // as JS stores everything in 64 bit format and GL expects 32bits...
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(vertices), this.gl.STATIC_DRAW);

        this.colorbuffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colorbuffer);    
        // as JS stores everything in 64 bit format and GL expects 32bits...
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(colors), this.gl.STATIC_DRAW);
    }
}


function xsph(i, j,numsides) {
    return Math.cos(2 * Math.PI * (i / numsides)) * Math.sin(2 * Math.PI * (j / numsides));
}

function ysph(i, j,numsides) {
    return Math.cos(2 * Math.PI * (j / numsides));
}

function zsph(i, j,numsides) {
    return Math.sin(2 * Math.PI * (i / numsides)) * Math.sin(2 * Math.PI * (j / numsides));
}


////////////////////////////////////////
//////////SPHERE//////////////////////////////
////////////////////////////////////////
class sphere extends CGRAobject{
    constructor(glcontext,radius=0.5){
        super(glcontext); 
        //let numsides = 10;
        
////////////////////////////////////////
//////////CREATES THE TRIANGLES/////////
////////////////////////////////////////
        var vertices = [];
        for (let i = 0; i < numsides; i += 1) {
            for (let j = 0; j < numsides/2; j += 1) { 
                vertices.push(
                    // Vert1
                    radius*xsph(i, j, numsides),
                    radius*ysph(i, j, numsides),
                    radius*zsph(i, j, numsides),
                    // Vert2
                    radius*xsph(i + 1, j, numsides),
                    radius*ysph(i + 1, j, numsides),
                    radius*zsph(i + 1, j, numsides),
                    // Vert3
                    radius*xsph(i, j + 1, numsides),
                    radius*ysph(i, j + 1, numsides),
                    radius*zsph(i, j + 1, numsides),  
                    //Vert4  
                    radius*xsph(i+1,j+1,numsides),  
                    radius*ysph(i+1,j+1,numsides),  
                    radius*zsph(i+1,j+1,numsides),
                    //Vert2  
                    radius*xsph(i+1,j,numsides),  
                    radius*ysph(i+1,j,numsides),  
                    radius*zsph(i+1,j,numsides),  
                    //Vert3 
                    radius*xsph(i,j+1,numsides),  
                    radius*ysph(i,j+1,numsides),  
                    radius*zsph(i,j+1,numsides),  
                );
            }
        }

        
////////////////////////////////////////
//////////COLORS+ET+AL//////////////////////////////
////////////////////////////////////////
        var colors = [];
        while (colors.length < vertices.length) {
            colors.push(
                1, 0, 0, 
                0, 1, 0, 
                0, 0, 1, 
            );
        }
        this.numvertices = vertices.length/3;
////////////////////////////////////////////////////////
        this.vertexbuffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vertexbuffer);    
        // as JS stores everything in 64 bit format and GL expects 32bits...
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(vertices), this.gl.STATIC_DRAW);

        this.colorbuffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colorbuffer);    
        // as JS stores everything in 64 bit format and GL expects 32bits...
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(colors), this.gl.STATIC_DRAW);
    }
}



//# TAKES 2D INDICES TO Texc 
function xsquare(i, j,numsides) {
    return 1-(i/numsides);
}

function ysquare(i, j,numsides) {
    return 2*j/numsides;
}


 
class sphereT extends sphere{
    constructor(glcontext, radius = 0.5){
        super(glcontext, radius); //# initialize the parent class
        this.vTexCoords = [];
        
        
        for (let i = 0; i < numsides; i += 1) {
            for (let j = 0; j < numsides/2; j += 1) { 
                this.vTexCoords.push(
                    // Vert1
                    xsquare(i, j, numsides),
                    ysquare(i, j, numsides),
                    // Vert2
                    xsquare(i + 1, j, numsides),
                    ysquare(i + 1, j, numsides),
                    // Vert3
                    xsquare(i, j + 1, numsides),
                    ysquare(i, j + 1, numsides), 
                    //Vert4  
                    xsquare(i+1,j+1,numsides),  
                    ysquare(i+1,j+1,numsides),  
                    //Vert2  
                    xsquare(i+1,j,numsides),  
                    ysquare(i+1,j,numsides),  
                    //Vert3 
                    xsquare(i,j+1,numsides),  
                    ysquare(i,j+1,numsides),  
                );
            }
        }
        
        
        //# Buffer
        this.texcoordsbuffer=this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.texcoordsbuffer);  
        var a = new Float32Array(this.vTexCoords);                            //# a HERE
        this.gl.bufferData(this.gl.ARRAY_BUFFER, a, this.gl.STATIC_DRAW);     //# a HERE
    }
    
    setTexture(cgratex){
            this.textureid = cgratex.textureid;
    }
    
    
    //# `drawit`
    drawit(viewM=glm.mat4(1.0), projM=glm.mat4(1.0), parentM = glm.mat4(1.0)){
        
        this.shaderprog.startUsing();
        this.texcoordsLocation = this.gl.getAttribLocation(this.shaderprog.shaderProgram,
                                                          "in_texcoords");
        
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.texcoordsbuffer);
        this.gl.vertexAttribPointer(this.texcoordsLocation, // Attribute location
                           2, //# number of elements per attribute
                           this.gl.FLOAT,  //# Type of elements
                           false,  // 
                           0, //# 2*Float32Array.BYTES_PER_ELEMENT, // size of a vertex in bytes 
                           0); //# Offset from the begining of a single vertex to this attribute
        this.gl.enableVertexAttribArray(this.texcoordsLocation);
        this.gl.bindTexture(this.gl.TEXTURE_2D, this.textureid);
        this.texturelocation =  this.gl.getUniformLocation(this.shaderprog.shaderProgram, "uSampler");
        this.gl.uniform1i(this.textureLocation, 0);
        
        //# WE HAD TO MODIFY ITTTTTTTTTTT
        super.drawit(viewM, projM, parentM);
    }
    
}


 
class precube extends CGRAobject{
    constructor(glcontext){
        super(glcontext); //# initialize the parent class
        //# not needed: this.numvertices = 36;
        this.vPositions = [];
        this.natpositions = [
            glm.vec3( -0.5, -0.5,  0.5 ),
            glm.vec3( -0.5,  0.5,  0.5 ),
            glm.vec3(  0.5,  0.5,  0.5 ),
            glm.vec3(  0.5, -0.5,  0.5 ),
            glm.vec3( -0.5, -0.5, -0.5 ),
            glm.vec3( -0.5,  0.5, -0.5 ),
            glm.vec3(  0.5,  0.5, -0.5 ),
            glm.vec3(  0.5, -0.5, -0.5 )
        ];
        
        //# These quad  fills (vColors,vPositions,texCoords), the buffer inputs. 
        //#  using (natpositions,colors,tcoords), the more natural descriptors. 
        this.quadVert( 1, 0, 3, 2 );
        this.quadVert( 2, 3, 7, 6 );
        this.quadVert( 3, 0, 4, 7 );
        this.quadVert( 6, 5, 1, 2 );
        this.quadVert( 4, 5, 6, 7 );
        this.quadVert( 5, 4, 0, 1 );
        
        
        this.numvertices = this.vPositions.length/3;
        
        //# vPositions
        this.vertexbuffer=this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vertexbuffer);    
        var a = new Float32Array(this.vPositions);                               //# a HERE
        this.gl.bufferData(this.gl.ARRAY_BUFFER, a, this.gl.STATIC_DRAW);        //# a HERE
    }
    
    //# QuadVert roughly takes 1Square as 4Vertices, and returns 2Triangles as 6Vericles;
        //# except the 1Square actually comes from (1Cube,4Indices)
    quadVert(a, b, c, d ) {
            //# Triangle (abc)
            this.vPositions = [].concat(this.vPositions,this.natpositions[a].array); 
            this.vPositions = [].concat(this.vPositions,this.natpositions[b].array); 
            this.vPositions = [].concat(this.vPositions, this.natpositions[c].array); 
            //# Triangle (acd)
            this.vPositions = [].concat(this.vPositions, this.natpositions[a].array); 
            this.vPositions = [].concat(this.vPositions, this.natpositions[c].array); 
            this.vPositions = [].concat(this.vPositions, this.natpositions[d].array); 
    }
    
    
}

 
class cube extends precube{
    constructor(glcontext){
        super(glcontext); 
        this.vColors = [];
        this.natcolors = [
            glm.vec3( 0.0, 0.0, 0.0 ),  //# black
            glm.vec3( 1.0, 0.0, 0.0 ),  //# red
            glm.vec3( 1.0, 1.0, 0.0 ),  //# yellow
            glm.vec3( 0.0, 1.0, 0.0 ),  //# green
            glm.vec3( 0.0, 0.0, 1.0 ),  //# blue
            glm.vec3( 1.0, 0.0, 1.0 ),  //# magenta
            glm.vec3( 1.0, 1.0, 1.0 ),  //# white
            glm.vec3( 0.0, 1.0, 1.0 )   //# cyan
        ];
        
        
        
        //# These quad  fills (vColors,vPositions,texCoords), the buffer inputs. 
        //#  using (positions,natcolors,tcoords), the more natural descriptors. 
        this.quadColor( 1, 0, 3, 2 );
        this.quadColor( 2, 3, 7, 6 );
        this.quadColor( 3, 0, 4, 7 );
        this.quadColor( 6, 5, 1, 2 );
        this.quadColor( 4, 5, 6, 7 );
        this.quadColor( 5, 4, 0, 1 );
        
        
        //# vColors
        this.colorbuffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colorbuffer);    
        var a = new Float32Array(this.vColors);                                    //# a HERE
        this.gl.bufferData(this.gl.ARRAY_BUFFER, a, this.gl.STATIC_DRAW);           //# a HERE
    }
    
    
    quadColor(a, b, c, d ) {
            //# Triangle (abc)
            this.vColors = [].concat(this.vColors,this.natcolors[a].array); 
            this.vColors = [].concat(this.vColors, this.natcolors[b].array); 
            this.vColors = [].concat(this.vColors, this.natcolors[c].array); 
            //# Triangle (acd)
            this.vColors = [].concat(this.vColors, this.natcolors[a].array);  
            this.vColors = [].concat(this.vColors, this.natcolors[c].array); 
            this.vColors = [].concat(this.vColors,this.natcolors[d].array); 
        }
    
}



 
class cubeT extends cube{
    constructor(glcontext){
        super(glcontext); //# initialize the parent class
        this.vTexCoords = [];
        
        this.nattcoords = [
            glm.vec2(0.0,0.0),
            glm.vec2(0.0,1.0),
            glm.vec2(1.0,1.0),
            glm.vec2(1.0,0.0)
        ];
        
        //# These quad  fills (vColors,vPositions,vTexCoords), the buffer inputs. 
        //#  using (positions,colors,nattcoords), the more natural descriptors. 
        this.quadTex( 1, 0, 3, 2 );
        this.quadTex( 2, 3, 7, 6 );
        this.quadTex( 3, 0, 4, 7 );
        this.quadTex( 6, 5, 1, 2 );
        this.quadTex( 4, 5, 6, 7 );
        this.quadTex( 5, 4, 0, 1 );
        
        //# vTexCoords
        this.texcoordsbuffer=this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.texcoordsbuffer);  
        var a = new Float32Array(this.vTexCoords);                                   //# a HERE
        this.gl.bufferData(this.gl.ARRAY_BUFFER, a, this.gl.STATIC_DRAW);     //# a HERE
    }
         
    quadTex(a, b, c, d ) {
        //# Triangle (abc)
        this.vTexCoords = [].concat(this.vTexCoords,this.nattcoords[0].array);
        this.vTexCoords = [].concat(this.vTexCoords, this.nattcoords[1].array);
        this.vTexCoords = [].concat(this.vTexCoords,this.nattcoords[2].array);
        //# Triangle (acd)
        this.vTexCoords = [].concat(this.vTexCoords, this.nattcoords[0].array);
        this.vTexCoords = [].concat(this.vTexCoords,this.nattcoords[2].array);
        this.vTexCoords = [].concat(this.vTexCoords, this.nattcoords[3].array);
    }
    
    
    setTexture(cgratex){
            this.textureid = cgratex.textureid;
    }
    
    drawit(viewMat, projectionMat){
        this.shaderprog.startUsing();
        this.texcoordsLocation = this.gl.getAttribLocation(this.shaderprog.shaderProgram,
                                                          "in_texcoords");
        
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.texcoordsbuffer);
        this.gl.vertexAttribPointer(this.texcoordsLocation, // Attribute location
                           2, //# number of elements per attribute
                           this.gl.FLOAT,  //# Type of elements
                           false,  // 
                           0, //# 2*Float32Array.BYTES_PER_ELEMENT, // size of a vertex in bytes 
                           0); //# Offset from the begining of a single vertex to this attribute
        this.gl.enableVertexAttribArray(this.texcoordsLocation);
        this.gl.bindTexture(this.gl.TEXTURE_2D, this.textureid);
        this.texturelocation =  this.gl.getUniformLocation(this.shaderprog.shaderProgram, "uSampler");
        this.gl.uniform1i(this.textureLocation, 0);
        //# the parent method does the rest
        super.drawit(viewMat,projectionMat);
    }
    
}


 

class opencube extends CGRAobject{
    constructor(glcontext){
        super(glcontext); // initialize the parent class
        
        // Plus Minus
        const p = 0.5;
        const m = -0.5;

        // We need 6 vertices for 2 triangles to represent a square
        this.numvertices = 36;
        
        var vertices = [
            // Vertices go: (1->2->3->4->2->3)
            
            //FRONT +x
            p, p, p, //1
            p, m, p,
            p, p, m, 
            p, m, m, //2
            p, m, p,
            p, p, m,
            //BACK -x
            m, p, p, //1
            m, m, p,
            m, p, m, 
            m, m, m, //2
            m, m, p,
            m, p, m,
            //RIGHT +y
            p, p, p, 
            p, p, m, 
            m, p, p, 
            m, p, m, 
            p, p, m, 
            m, p, p, 
            //LEFT -y  // I MESSED UP! THIS IS THE FRONT FACE!!!
            p, m, p, 
            p, m, m, 
            m, m, p, 
            m, m, m, 
            p, m, m, 
            m, m, p, 
            //TOP  +z
            p, p, p, 
            m, p, p, 
            p, m, p, 
            m, m, p, 
            m, p, p, 
            p, m, p, 
            //BOT -z
            //p, p, m, 
            //m, p, m, 
            //p, m, m, 
            //m, m, m, 
            //m, p, m, 
            //p, m, m, 
        ];
           

////////////////////////////////////////
//////////COLORS+ET+AL//////////////////////////////
////////////////////////////////////////
        var colors = [];
        while (colors.length < vertices.length) {
            colors.push(
                1, 0, 0, 
                0, 1, 0, 
                0, 0, 1
            );
        }
        this.numvertices = vertices.length / 3;
/////////////////////////////////////////
        this.vertexbuffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vertexbuffer);    
        // as JS stores everything in 64 bit format and GL expects 32bits...
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(vertices), this.gl.STATIC_DRAW);

        this.colorbuffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colorbuffer);    
        // as JS stores everything in 64 bit format and GL expects 32bits...
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(colors), this.gl.STATIC_DRAW);
    }
}

 

// Cylinder class
class cylinder extends CGRAobject {
    constructor(glcontext) {
        super(glcontext);
        //let numsides = 10;
        let height = 0.5;

        var vertices = [];
        for (let i = 0; i < numsides; i++) {

            // Bottom circle
            vertices.push(
                xcyl(i, numsides), ycyl(i, numsides), 0,
                xcyl(i+1, numsides), ycyl(i+1, numsides), 0,
                0, 0, 0 // Center of the circle
            );

            // Top circle
            vertices.push(
                xcyl(i, numsides), ycyl(i, numsides), height,
                xcyl(i+1, numsides), ycyl(i+1, numsides), height,
                0, 0, height // Center of the circle
            );

            // Side rectangle - made of two triangles
            // Triangle 1
            vertices.push(
                xcyl(i, numsides), ycyl(i, numsides), 0,
                xcyl(i, numsides), ycyl(i, numsides), height,
                xcyl(i+1, numsides), ycyl(i+1, numsides), height
            );
            // Triangle 2
            vertices.push(
                xcyl(i+1, numsides), ycyl(i+1, numsides), height,
                xcyl(i+1, numsides), ycyl(i+1, numsides), 0,
                xcyl(i, numsides), ycyl(i, numsides), 0
            );
        }

////////////////////////////////////////
//////////COLORS+ET+AL//////////////////////////////
////////////////////////////////////////
        var colors = [];
        while (colors.length < vertices.length) {
            colors.push(
                1, 0, 0, 
                0, 1, 0, 
                0, 0, 1
            );
        }
        this.numvertices = vertices.length / 3; 
/////////////////////////////////////////
        // Create buffers for vertices and colors
        this.vertexbuffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vertexbuffer);    
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(vertices), this.gl.STATIC_DRAW);

        this.colorbuffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colorbuffer);    
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(colors), this.gl.STATIC_DRAW);
    }
}


 
// Cone class
class cone extends CGRAobject {
    constructor(glcontext) {
        super(glcontext);
        //let numsides = 10;
        let height = 0.5; 

        var vertices = [];
        for (let i = 0; i < numsides; i++) {

            // Bottom circle
            vertices.push(
                xcyl(i, numsides), ycyl(i, numsides), 0,
                xcyl(i + 1, numsides), ycyl(i + 1, numsides), 0,
                0, 0, 0 // Center of the circle
            );


            // Triangle 
            vertices.push(
                xcyl(i, numsides), ycyl(i, numsides),0,
                xcyl(i+1, numsides), ycyl(i+1, numsides), 0,
                0, 0, height
            );
        }

        // Colors
        var colors = [];
        while (colors.length < vertices.length) {
            colors.push(
                1, 0, 0, 
                0, 1, 0, 
                0, 0, 1
            );
        }
        this.numvertices = vertices.length / 3; 

        // Create buffers for vertices and colors
        this.vertexbuffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vertexbuffer);    
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(vertices), this.gl.STATIC_DRAW);

        this.colorbuffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colorbuffer);    
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(colors), this.gl.STATIC_DRAW);
    }
}


 
class cutcone extends CGRAobject {
    constructor(glcontext) {
        super(glcontext);
        //let numsides = 10;
        let height = 0.5; 
        let outerradius = 2; 
        let innerradius = 0.3; 

        var vertices = [];
        for (let i = 0; i < numsides; i++) {

            // Upward  triangles
            vertices.push(
                //# Vert1
                outerradius*xcyl(i, numsides), outerradius*ycyl(i, numsides),0,
                //# Vert2
                outerradius*xcyl(i+1, numsides), outerradius*ycyl(i+1, numsides), 0,
                //# Vert3
                innerradius*xcyl(i+0.5, numsides), innerradius*ycyl(i+0.5, numsides), height/2
            );

            // Downward  triangles
            vertices.push(
                //# Vert1
                innerradius*xcyl(i-0.5, numsides), innerradius*ycyl(i-0.5, numsides),height/2,
                //# Vert2
                innerradius*xcyl(i+0.5, numsides), innerradius*ycyl(i+0.5, numsides), height/2,
                //# Vert3
                outerradius*xcyl(i, numsides), outerradius*ycyl(i, numsides), 0
            );
        }

        // Colors
        var colors = [];
        while (colors.length < vertices.length) {
            colors.push(
                0, 0, 0, 
                0, 0, 0, 
                0, 0, 1
            );
        }
        this.numvertices = vertices.length / 3; 

        // Create buffers for vertices and colors
        this.vertexbuffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vertexbuffer);    
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(vertices), this.gl.STATIC_DRAW);

        this.colorbuffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colorbuffer);    
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(colors), this.gl.STATIC_DRAW);
    }
}
 
class hammer extends CGRAobject{
    constructor(glcontext){   
        super(glcontext);
        
        this.myobj1 = new cylinder(this.gl);
        this.myobj2 = new cube(this.gl);
        
        //# Shapes the Cylinder
        this.myobj1.applyModelTransformation(scalingAnisotropic(0.1, 0.1, 2.7));
        this.myobj1.applyModelTransformation(translation(0, 0, -0.5));
        
        //# Shapes the Cube
        this.myobj2.applyModelTransformation(scalingAnisotropic(0.75, 0.25, 0.35));
        this.myobj2.applyModelTransformation(translation(0, 0, -0.5));
        
    }
    
    //# `setShader` Method: 
    setShader(shader){
        this.myobj1.setShader(shader);
        this.myobj2.setShader(shader);
    }
    
    
    //# `drawit` method:
        // Function: VIP!
            // 1. Recursively applies all the `modelMat`.  
            // 2. Draws. 
        // Ideas:
            // Says: No default params is fine. Default params being `Identity` is fine.
            // Say: Shouldn`t I make the default param for `parentM` be `this.modelMat`? And so on?
    
    //# `drawit`
    drawit(view=glm.mat4(1.0),proj=glm.mat4(1.0), parentM = glm.mat4(1.0)){
        var globalM= parentM['*'](this.modelMat);
        this.myobj1.drawit(view,proj,globalM);
        this.myobj2.drawit(view,proj,globalM); 
        
        
    }
}

 
class lamp extends CGRAobject{
    constructor(glcontext){   
        super(glcontext);
        
        this.myobj1 = new sphere(this.gl);
        this.myobj2 = new cutcone(this.gl);
        this.myobj3 = new cylinder(this.gl);
        
        let base = 0.5;
        
        //# Shapes the sphere
        this.myobj1.applyModelTransformation(scalingIsotropic(0.7));
        
        //# Shapes the cutcone
        this.myobj2.applyModelTransformation(scalingAnisotropic(0.4,0.4,-0.3));
        this.myobj2.applyModelTransformation(translation(0, 0, -0.25));
        this.myobj2.applyModelTransformation(rotationX(90));
        
        //# Shapes the cylinder
        this.myobj3.applyModelTransformation(scalingAnisotropic(1.0,1.0,0.4));
        this.myobj3.applyModelTransformation(scalingAnisotropic(0.2,0.2,1.0));
        this.myobj3.applyModelTransformation(translation(0, 0, -0.5));
        this.myobj3.applyModelTransformation(rotationX(90));
        
        
        //# Rezoom //# we could do this in one go, by modifying `modelMat`. But I won`t.
        this.modelPreMat = glm.mat4(1.0);
        
        //# Rezoom //# we could do this in one go, by modifying `modelMat`. But I won`t.
        this.myobj1.applyModelTransformation(scalingIsotropic(base));
        this.myobj2.applyModelTransformation(scalingIsotropic(base));
        this.myobj3.applyModelTransformation(scalingIsotropic(base));
        
         
        
    }
    
    //# `setShader` Method: 
    setShader(shader){
        this.myobj1.setShader(shader);
        this.myobj2.setShader(shader);
        this.myobj3.setShader(shader);
    }
    
    //# Dynamics
    setDynamics(counter){
        this.modelPreMat = translation(0.0,0.1*Math.sin(0.1*counter),0);
    }
    
    
    //# `drawit`
    drawit(view=glm.mat4(1.0), proj=glm.mat4(1.0), parentM = glm.mat4(1.0)){
        var modifiedModelMat = this.modelMat['*'](this.modelPreMat);
        var globalM= parentM['*'](modifiedModelMat);
        
        this.myobj1.drawit(view,proj,globalM);
        this.myobj2.drawit(view,proj,globalM); 
        this.myobj3.drawit(view,proj,globalM); 
        
        
    }
}

 
class solarsystem extends CGRAobject{
    constructor(glcontext){
        super(glcontext);
        
        // generalfactor and distancefactor and distancebias
        
        
        let numofplanets=1+8;
        
        //#JustSunThings:
        //# I introduce some multiplier factors so that I can change the size of the solar system
            //# in a way that increases everything together proportionally. It's easier this way.
            //# Also the sun is too big, so I make it smaller.
        const trueradiusofsun = 690.340;
        let sunfactor = 2.0;
        let modelradiusofsun = trueradiusofsun/sunfactor;
        let generalfactor = 1;
        let distancefactor = 1/10 ;
        let distancebias = -2.5;
        distancefactor = distancefactor * generalfactor;
        
        
        //#  Planets - THE SUN IS A PLANET!
        
        //# Distance:
        let planetDistance = [ 0.0, 
            6.25+distancebias, 6.5+distancebias, 7.0+distancebias, 7.5+distancebias, 
            9.0+distancebias, 10+distancebias, 11+distancebias, 12.0+distancebias
        ];
        //# Radii:
        let planetRadii = [ modelradiusofsun/trueradiusofsun, 
            2.4397/trueradiusofsun, 6.0518/trueradiusofsun, 6.371/trueradiusofsun, 3.389/trueradiusofsun, 
            69.911/trueradiusofsun, 58.232/trueradiusofsun, 25.362/trueradiusofsun, 24.622/trueradiusofsun
        ];
        //# SpinningPeriods: //#some plantes were chagned, original values: [ 1.0/27.0, 6, 10.0, 5, 6, 0.41, 0.45, 0.72, 0.67];
        let planetSpinningPeriods = [ 1.0/27.0, 58.6/24.4, 243.0/24.4, 0.92, 1.03, 0.41, 0.45, 0.72, 0.67];
        //# OrbitalPeriods: //# some were changed [0, 0.24, 0.62, 1.0, 1.88, 11.86, 29.46, 84.0, 164.8]
        let planetOrbitalPeriods = [0.0, 2*0.24, 2*0.62, 2*1.0, 2*1.88, 11.86, 29.46, 84.01, 164.79];
        //# Names:
        //var planetNames = ["Sun", "Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
        
        
        //# Creates all the objects.
        this.planets = [];
        for(let i =0; i<numofplanets; i++){
            this.planets.push(new sphereT(this.gl));  //# NEW OBJECT HERE
            //this.planets.push(new sphere(this.gl));  //# NEW OBJECT HERE
            this.planets[i].index = i;
        }
        
        //# Adds attributes for distance and radius.
        for (const [index, planet] of this.planets.entries()) {
            planet.distance = planetDistance[index];
            planet.radius = planetRadii[index];
            planet.orbitalperiod = planetOrbitalPeriods[index];
            planet.spinningperiod = planetSpinningPeriods[index];
        }
        //# Base model transformation.
        for (let planet of this.planets) {
            planet.applyModelTransformation( scalingIsotropic(planet.radius*generalfactor) );
            planet.applyModelTransformation( translation(planet.distance*distancefactor,0.0,0.0) );
        }
        //# Stores base model transformation as modelBase.
        for (let planet of this.planets) {
            planet.modelBase=planet.modelMat;
        }
    }
    
    //# Adds time-based (spin+orbiting) to the model transformation.
    setDynamics(counter){
        
        let spinC = 1.0;
        let sunspinC = 0.1;
        let orbitC = 2.0;
        
        for (let planet of this.planets) {
            //# Set BASE:
            planet.setModelTransformation(planet.modelBase); 
            //# Apply SPIN:
            if (planet.index > 0) {
                planet.preapplyModelTransformation(rotationY( 
                    spinC*(counter/planet.spinningperiod)  - orbitC*(counter/planet.orbitalperiod)
                ));
            } else {
                planet.preapplyModelTransformation(rotationY( 
                    spinC*sunspinC*counter/planet.spinningperiod 
                )); 
            }
            //# Apply ORBIT:
            if (planet.index > 0) {
                planet.applyModelTransformation(rotationY( 
                    orbitC*counter / planet.orbitalperiod 
                )); 
            }
        }
    }
    
    
    //# `setShader` Method: 
    setShader(shader){
        for (let planet of this.planets) {
            //# shader for each planet
            planet.setShader(shader);
        }
    }
    
    //# `setTexture` Method: 
    setTexture(tex){
        for (let planet of this.planets) {
            //# shader for each planet
            planet.setTexture(tex);
        }
    }
    
    setTextureMulti(multitex2){ // Earth Jupiter Saturn
        this.planets[0].setTexture(multitex2.Sun);
        this.planets[1].setTexture(multitex2.Mercury);
        this.planets[2].setTexture(multitex2.Venus);
        this.planets[3].setTexture(multitex2.Earth);
        this.planets[4].setTexture(multitex2.Mars);
        this.planets[5].setTexture(multitex2.Jupiter);
        this.planets[6].setTexture(multitex2.Saturn);
        this.planets[7].setTexture(multitex2.Uranus);
        this.planets[8].setTexture(multitex2.Neptune);
    }
    
    //# `drawit`
    drawit(view=glm.mat4(1.0),proj=glm.mat4(1.0), parentM = glm.mat4(1.0)){
        var globalM= parentM['*'](this.modelMat);
        for (let planet of this.planets) {
            planet.drawit(view,proj,globalM);
        }
    }
        
}

 
class tablewithsolarsystem extends CGRAobject{
    constructor(glcontext){   
        super(glcontext);
        
        this.myobjT1 = new solarsystem(this.gl);
        this.myobjT2 = new cubeT(this.gl);
        
        //# Shapes the Cube
        this.myobjT1.applyModelTransformation(scalingIsotropic(0.8));
        
        //# Shapes the Cube
        this.myobjT2.applyModelTransformation(scalingIsotropic(0.8));
        this.myobjT2.applyModelTransformation(translation(0,-0.8,0));
        
    }
    
    
    //# Adds time-based (spin+orbiting) to the model transformation.
    setDynamics(counter){
        this.myobjT1.setDynamics(counter);
    }
    
    
    // `setShader` Method: 
    setShader(shader,shaderT){
        //# shader for solarsystem
        this.myobjT1.setShader(shaderT);
        //# shader for cubeT
        this.myobjT2.setShader(shaderT);
    }
    
    setTexture(cgratex){
        //# texture for solarsystem
        this.myobjT1.setTexture(cgratex);
        //# texture for cubeT
        this.myobjT2.setTexture(cgratex);
    }
    
    setTextureMulti(tex1,multitex2){
            //# texture for solarsystem
            this.myobjT1.setTextureMulti(multitex2);
            //# texture for cubeT
            this.myobjT2.setTexture(tex1);
    }
    
    //# `drawit`
    drawit(view=glm.mat4(1.0),proj=glm.mat4(1.0), parentM = glm.mat4(1.0)){
        var globalM= parentM['*'](this.modelMat);
        this.myobjT1.drawit(view,proj,globalM);
        this.myobjT2.drawit(view,proj,globalM); 
    }
}

 
class museum extends CGRAobject{
    constructor(glcontext){   
        super(glcontext);
        
        this.myobjT1 = new tablewithsolarsystem(this.gl);
        this.myobjT2 = new cubeT(this.gl);
        this.myobj3 = new lamp(this.gl);
        
        
        //# Shapes the tablewithsolarsystem
        this.myobjT1.applyModelTransformation(scalingIsotropic(1));
        //# Shapes the cubeT
        this.myobjT2.applyModelTransformation(scalingIsotropic(2.5));
        //# Shapes the lamp
        this.myobj3.applyModelTransformation(scalingIsotropic(0.4));
        this.myobj3.applyModelTransformation(translation(0,1,0));
        
    }
    
    //# `setShader` Method: 
    setShader(shader,shaderT){
        //# shader for tablewithsolarsystem
        this.myobjT1.setShader(shader,shaderT);
        //# shader for ocube
        this.myobjT2.setShader(shaderT);
        //# shader for lamp
        this.myobj3.setShader(shader);
    }
    
    setTextureOld(cgratex){
            //# texture for tablewithsolarsystem
            this.myobjT1.setTexture(cgratex);
            //# texture for opencube
            //# this.myobjT2.setTexture(cgratex);
    }
    
    setTextureMultiV1(tex2,multitex2){
            //# texture for tablewithsolarsystem
            this.myobjT1.setTextureMulti(tex2,multitex2);
            //# texture for opencube
            //# this.myobjT2.setTexture(tex1);
    }
    
    setTexture(tex1, tex2,multitex2){
            //# texture for tablewithsolarsystem
            this.myobjT1.setTextureMulti(tex2,multitex2);
            //# texture for cubeT
            this.myobjT2.setTexture(tex1);
    }
    
    
    //# Adds time-based (spin+orbiting) to the model transformation.
    setDynamics(counter){
        this.myobjT1.setDynamics(counter);
        this.myobj3.setDynamics(counter);
    }
    
    drawManyLamps(view=glm.mat4(1.0),proj=glm.mat4(1.0), parentM = glm.mat4(1.0)){
        let lampTranslationsArray = [
            [0.5, 0.0, 0.5 ],
            [-0.5, 0.0, 0.5 ],
            [0.0, 0.0, 0.0 ],
        ];
        for(let transl of lampTranslationsArray){
            var modifiedModelMat = translation(...transl)['*'](this.modelMat);
            var globalM = parentM['*'](modifiedModelMat);
            //var globalM = parentM['*'](this.modelMat);
            this.myobj3.drawit(view,proj,globalM); 
        }
    }
    
    
    //# `drawit`
    drawit(view=glm.mat4(1.0),proj=glm.mat4(1.0), parentM = glm.mat4(1.0)){
        var globalM = parentM['*'](this.modelMat);
        this.myobjT1.drawit(view,proj,globalM);
        this.myobjT2.drawit(view,proj,globalM); 
        this.drawManyLamps(view,proj,parentM); 
        //this.myobj3.drawit(view,proj,globalM); 
    }
}