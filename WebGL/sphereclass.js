var numsides=16;
class sphere extends CGRAobject{
    constructor(glcontext,radius=0.5){
        super(glcontext); 
        //# let numsides = 10;
        
        //#CREATES THE TRIANGLES
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
        //#vertices-buffer
        this.vertexbuffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vertexbuffer);    
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(vertices), this.gl.STATIC_DRAW);
        //#numvertices
        this.numvertices = vertices.length/3;
        //#colors
        var colors = [];
        while (colors.length < vertices.length) {
            colors.push(
                1, 0, 0, 
                0, 1, 0, 
                0, 0, 1, 
            );
        }
        //#colors-buffer
        this.colorbuffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colorbuffer);    
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(colors), this.gl.STATIC_DRAW);
        //#modelBase
        this.modelBase = glm.mat4(1.0);
    }
}