AFRAME.registerComponent("poster", {
    init: function () {
      this.createPoster()
      this.createCards()
    },

    createCards: function () {
        const thumbNailsRef = [
          {
            id: "amazing-spider-man",
            title: "The Amazing Spider Man",
            url: "./thumbnails/asm.jpg",
          },
          {
            id: "batman-kings-fears",
            title: "Batman Kings of Fear",
            url: "./thumbnails/bmkf.jpg",
          },
    
          {
            id: "guardians-galaxy",
            title: "Guardians of the Galaxy",
            url: ".thumbnails/gg.jpg",
          },
          {
            id: "DC-variants",
            title: "DC Comics Variant Covers",
            url: "./thumbnails/vc.jpg",
          },
        ];
        let prevoiusXPosition = -60;
    
        for (var item of thumbNailsRef) {
          const posX = prevoiusXPosition + 25;
          const posY = 10;
          const posZ = -40;
          const position = { x: posX, y: posY, z: posZ };
          prevoiusXPosition = posX;
    
          // Border Element
          const borderEl = this.createBorder(position, item.id)
          
          // Thumbnail Element
          const thumbNail = this.createThumbNail(item)
          borderEl.appendChild(thumbNail)
         
          // Title Text Element
          const titleEl = this.createTitleEl(position, item)
          borderEl.appendChild(titleEl)
          
          this.placesContainer.appendChild(borderEl);
        }
    },
      
    createBoundary: function(position, id) {
        const entityEl = document.createElement("a-entity")
        entityEl.setAttribute("id", id)
        entityEl.setAttribute("visible", true)
        entityEl.setAttribute("geometry", {
          primitive : "ring",
          radiusInner : 9, 
          radiusOuter : 10
        })
        entityEl.setAttribute("position", position)
        entityEl.setAttribute("material", {
          color : "#0077cc",
          opacity : 1
        })
        return entityEl
      },

    createPoster: function(item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("geometry", {
        primitive : "plane",
        width : 20,
        height: 28
      });

      entityEl.setAttribute("position", {x:0, y:5, z:0.1});
      entityEl.setAttribute("material", {src: item.url});
    },

    createThumbNail: function(item) {
        const entityEl = document.createElement("a-entity")
        entityEl.setAttribute("visible", true)
        entityEl.setAttribute("geometry", {
          primitive : "circle",
          radius : 9, 
        })
        entityEl.setAttribute("material", {
          src : item.url
        })
        return entityEl
      },

      createTitleEl: function(position, item) {
        const entityEl = document.createElement("a-entity")
        entityEl.setAttribute("text", {
          font : "exo2bold",
          align : "center",
          width : 70,
          color : "#e65100",
          value : item.title
        })
        const elPosition = position
        elPosition.y = -20
        entityEl.setAttribute("position", elPosition)
        entityEl.setAttribute("visible", true)
        return entityEl
      }
  
  });  