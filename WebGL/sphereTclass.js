%%js
class sphereT extends sphere{
    constructor(glcontext,radius=0.5){
        super(glcontext,radius); //# initialize the parent class
        
        function xsquare(i, j,numsides) {
            return 1-(i/numsides);
        }
        function ysquare(i, j,numsides) {
            return 2*j/numsides;
        }
        
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
        //var globalM = parentM['*'](this.modelMat);
        //there's a n issue here
        
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
