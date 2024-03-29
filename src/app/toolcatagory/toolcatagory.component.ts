import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-toolcatagory',
  templateUrl: './toolcatagory.component.html',
  styleUrls: ['./toolcatagory.component.css']
})
export class ToolcatagoryComponent implements OnInit {
  
  [x: string]:any;
//   Tool_Name:any;
//   clock:any;
//   _cumulativeLab:any;
//   _quaterLab:any;
  
//   idToken = localStorage.getItem('csrftoken');
apiRoot: string = "http://152.135.122.61:8871";
//  apiRoot: string = "http://152.135.122.61:8871";
//options = { headers: new HttpHeaders({'Authorization': 'JWT '+ this.cookie.get('csrftoken')}) };
  
  constructor(private _data1:DataService,private http:HttpClient,) { }
//   options = { headers: new HttpHeaders({'Authorization': 'JWT '+ this.idToken})};

  ngOnInit() {

    setInterval(()=>{
        this.clock = Date.now();
      },1000);


    
    this.http.get(this.apiRoot+'/api/tool_category_data/31/').subscribe(data =>{
      this._labListed1a = data as [any];
      if (this._labListed1a.Tool_efficiency === false) {
        $('#lab1a').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed1a.Tool_efficiency === true) {
        $('#lab1a').css({fill: "rgba(140, 192, 19, 0.88)"});
      }
      $("#lab1a").hover(()=>{
        if (this._labListed1a.Tool_Category === "Qualifications") {
            $('#lab1a').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed1a.Tool_Category === "Field Issues") {
            $('#lab1a').css("fill", "rgb(255, 193, 203)");
        }
        else if (this._labListed1a.Tool_Category === "Process") {
            $('#lab1a').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed1a.Tool_efficiency === false) {
            $('#lab1a').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed1a.Tool_efficiency === true) {
            $('#lab1a').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });
    })

    this.http.get(this.apiRoot+'/api/tool_category_data/144/').subscribe(data =>{
        this._labListed1b = data as [any];
        if (this._labListed1b.Tool_efficiency === false) {
          $('#lab1b').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed1b.Tool_efficiency === true) {
          $('#lab1b').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
        $("#lab1b").hover(()=>{
          if (this._labListed1b.Tool_Category === "Qualifications") {
              $('#lab1b').css("fill", "rgb(125, 109, 196)");
          }
          else if (this._labListed1b.Tool_Category === "Field Issues") {
              $('#lab1b').css("fill", "rgb(255, 193, 203)");
          }
          else if (this._labListed1b.Tool_Category === "Process") {
              $('#lab1b').css({fill: "#aee9ca"});
          }
      },
       ()=> {
          if (this._labListed1b.Tool_efficiency === false) {
              $('#lab1b').css({fill: "rgba(239, 9, 9, 0.78)"});
          }
          else if (this._labListed1b.Tool_efficiency === true) {
              $('#lab1b').css({fill: "rgba(140, 192, 19, 0.88)"});
          }
      });
      })

      this.http.get(this.apiRoot+'/api/tool_category_data/143/').subscribe(data =>{
        this._labListed1c = data as [any];
        if (this._labListed1c.Tool_efficiency === false) {
          $('#lab1c').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed1c.Tool_efficiency === true) {
          $('#lab1c').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
        $("#lab1c").hover(()=>{
          if (this._labListed1c.Tool_Category === "Qualifications") {
              $('#lab1c').css("fill", "rgb(125, 109, 196)");
          }
          else if (this._labListed1c.Tool_Category === "Field Issues") {
              $('#lab1c').css("fill", "rgb(255, 193, 203)");
          }
          else if (this._labListed1c.Tool_Category === "Process") {
              $('#lab1c').css({fill: "#aee9ca"});
          }
      },
       ()=> {
          if (this._labListed1c.Tool_efficiency === false) {
              $('#lab1c').css({fill: "rgba(239, 9, 9, 0.78)"});
          }
          else if (this._labListed1c.Tool_efficiency === true) {
              $('#lab1c').css({fill: "rgba(140, 192, 19, 0.88)"});
          }
      });
      })

    this.labData2 = this.http.get(this.apiRoot+'/api/tool_category_data/99/').subscribe(data =>{
      console.log(data);
      this._labListed2 = data as [any];
      if (this._labListed2.Tool_efficiency === false) {
        $('#lab2').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed2.Tool_efficiency === true) {
        $('#lab2').css({fill: "rgba(140, 192, 19, 0.88)"});
      }

      $("#lab2").hover(()=>{
        if (this._labListed2.Tool_Category === "Qualifications") {
            $('#lab2').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed2.Tool_Category === "Field Issues") {
            $('#lab2').css("fill", "rgb(255, 193, 203)");

        }
        else if (this._labListed2.Tool_Category === "Process") {
            $('#lab2').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed2.Tool_efficiency === false) {
            $('#lab2').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed2.Tool_efficiency === true) {
            $('#lab2').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });
    })

    // this.http.get(this.apiRoot+'/api/tool_category_data/137/').subscribe(data =>{
    //     this._labListed2 = data as [any];
    //     if (this._labListed2.Tool_efficiency === false) {
    //       $('#lab2').css({fill: "rgba(239, 9, 9, 0.78)"});
    //     }
    //     else if (this._labListed2.Tool_efficiency === true) {
    //       $('#lab2').css({fill: "rgba(140, 192, 19, 0.88)"});
    //     }
    //     $("#lab2").hover(()=>{
    //       if (this._labListed2.Tool_Category === "Qualifications") {
    //           $('#lab2').css("fill", "rgb(125, 109, 196)");
    //       }
    //       else if (this._labListed2.Tool_Category === "Field Issues") {
    //           $('#lab2').css("fill", "rgb(255, 193, 203)");
    //       }
    //       else if (this._labListed2.Tool_Category === "Process") {
    //           $('#lab2').css({fill: "#aee9ca"});
    //       }
    //     },
    //    ()=> {
    //       if (this._labListed2.Tool_efficiency === false) {
    //           $('#lab2').css({fill: "rgba(239, 9, 9, 0.78)"});
    //       }
    //       else if (this._labListed2.Tool_efficiency === true) {
    //           $('#lab2').css({fill: "rgba(140, 192, 19, 0.88)"});
    //       }
    //   });
    //   })

    this.http.get(this.apiRoot+'/api/tool_category_data/145/').subscribe(data =>{
      this._labListed3 = data as [any];
      if (this._labListed3.Tool_efficiency === false) {
        $('#lab3').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed3.Tool_efficiency === true) {
        $('#lab3').css({fill: "rgba(140, 192, 19, 0.88)"});
      }
      $("#lab3").hover(()=>{
        if (this._labListed3.Tool_Category === "Qualifications") {
            $('#lab3').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed3.Tool_Category === "Field Issues") {
            $('#lab3').css("fill", "rgb(255, 193, 203)");
        }
        else if (this._labListed3.Tool_Category === "Process") {
            $('#lab3').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed3.Tool_efficiency === false) {
            $('#lab3').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed3.Tool_efficiency === true) {
            $('#lab3').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });
    })


    this.http.get(this.apiRoot+'/api/tool_category_data/66/').subscribe(data =>{
      this._labListed4 = data as [any];
      if (this._labListed4.Tool_efficiency === false) {
        $('#lab4').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed4.Tool_efficiency === true) {
        $('#lab4').css({fill: "rgba(140, 192, 19, 0.88)"});
      }

      $("#lab4").hover(()=>{
        if (this._labListed4.Tool_Category === "Qualifications") {
            $('#lab4').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed4.Tool_Category === "Field Issues") {
            $('#lab4').css("fill", "rgb(255, 193, 203)");

        }
        else if (this._labListed4.Tool_Category === "Process") {
            $('#lab4').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed4.Tool_efficiency === false) {
            $('#lab4').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed4.Tool_efficiency === true) {
            $('#lab4').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });

    })

    this.http.get(this.apiRoot+'/api/tool_category_data/147/').subscribe(data =>{
        console.log(data);
        this._labListed5 = data as [any];
        if (this._labListed5.Tool_efficiency === false) {
          $('#lab5').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed5.Tool_efficiency === true) {
          $('#lab5').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
  
        $("#lab5").hover(()=>{
          if (this._labListed5.Tool_Category === "Qualifications") {
              $('#lab5').css("fill", "rgb(125, 109, 196)");
          }
          else if (this._labListed5.Tool_Category === "Field Issues") {
              $('#lab5').css("fill", "rgb(255, 193, 203)");
  
          }
          else if (this._labListed5.Tool_Category === "Process") {
              $('#lab5').css({fill: "#aee9ca"});
          }
      },
       ()=> {
          if (this._labListed5.Tool_efficiency === false) {
              $('#lab5').css({fill: "rgba(239, 9, 9, 0.78)"});
          }
          else if (this._labListed5.Tool_efficiency === true) {
              $('#lab5').css({fill: "rgba(140, 192, 19, 0.88)"});
          }
      });
  
      })
  
  
//     this.http.get(this.apiRoot+'/api/tool_category_data/129/').subscribe(data =>{
//       console.log(data);
//       this._labListed6 = data as [any];
//       if (this._labListed6.Tool_efficiency === false) {
//         $('#lab6').css({fill: "rgba(239, 9, 9, 0.78)"});
//       }
//       else if (this._labListed6.Tool_efficiency === true) {
//         $('#lab6').css({fill: "rgba(140, 192, 19, 0.88)"});
//       }

//       $("#lab6").hover(()=>{
//         if (this._labListed6.Tool_Category === "Qualifications") {
//             $('#lab6').css("fill", "rgb(125, 109, 196)");
//         }
//         else if (this._labListed6.Tool_Category === "Field Issues") {
//             $('#lab6').css("fill", "rgb(255, 193, 203)");

//         }
//         else if (this._labListed6.Tool_Category === "Process") {
//             $('#lab6').css({fill: "#aee9ca"});
//         }
//     },
//      ()=> {
//         if (this._labListed6.Tool_efficiency === false) {
//             $('#lab6').css({fill: "rgba(239, 9, 9, 0.78)"});
//         }
//         else if (this._labListed6.Tool_efficiency === true) {
//             $('#lab6').css({fill: "rgba(140, 192, 19, 0.88)"});
//         }
//     });

//     })


this.http.get(this.apiRoot+'/api/tool_category_data/53/').subscribe(data =>{
    console.log(data);
    this._labListed6A = data as [any];
    if (this._labListed6A.Tool_efficiency === false) {
      $('#lab6A').css({fill: "rgba(239, 9, 9, 0.78)"});
    }
    else if (this._labListed6A.Tool_efficiency === true) {
      $('#lab6A').css({fill: "rgba(140, 192, 19, 0.88)"});
    }

    $("#lab6A").hover(()=>{
      if (this._labListed6A.Tool_Category === "Qualifications") {
          $('#lab6A').css("fill", "rgb(125, 109, 196)");
      }
      else if (this._labListed6A.Tool_Category === "Field Issues") {
          $('#lab6A').css("fill", "rgb(255, 193, 203)");

      }
      else if (this._labListed6A.Tool_Category === "Process") {
          $('#lab6A').css({fill: "#aee9ca"});
      }
  },
   ()=> {
      if (this._labListed6A.Tool_efficiency === false) {
          $('#lab6A').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed6A.Tool_efficiency === true) {
          $('#lab6A').css({fill: "rgba(140, 192, 19, 0.88)"});
      }
  });

  })


  
  this.http.get(this.apiRoot+'/api/tool_category_data/54/').subscribe(data =>{
      console.log(data);
      this._labListed6B = data as [any];
      if (this._labListed6B.Tool_efficiency === false) {
        $('#lab6B').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed6B.Tool_efficiency === true) {
        $('#lab6B').css({fill: "rgba(140, 192, 19, 0.88)"});
      }

      $("#lab6B").hover(()=>{
        if (this._labListed6B.Tool_Category === "Qualifications") {
            $('#lab6B').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed6B.Tool_Category === "Field Issues") {
            $('#lab6B').css("fill", "rgb(255, 193, 203)");

        }
        else if (this._labListed6B.Tool_Category === "Process") {
            $('#lab6B').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed6B.Tool_efficiency === false) {
            $('#lab6B').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed6B.Tool_efficiency === true) {
            $('#lab6B').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });

    })


    this.http.get(this.apiRoot+'/api/tool_category_data/58/').subscribe(data =>{
      console.log(data);
      this._labListed6C = data as [any];
      if (this._labListed6C.Tool_efficiency === false) {
        $('#lab6C').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed6C.Tool_efficiency === true) {
        $('#lab6C').css({fill: "rgba(140, 192, 19, 0.88)"});
      }

      $("#lab6C").hover(()=>{
        if (this._labListed6C.Tool_Category === "Qualifications") {
            $('#lab6C').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed6C.Tool_Category === "Field Issues") {
            $('#lab6C').css("fill", "rgb(255, 193, 203)");

        }
        else if (this._labListed6C.Tool_Category === "Process") {
            $('#lab6C').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed6C.Tool_efficiency === false) {
            $('#lab6C').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed6C.Tool_efficiency === true) {
            $('#lab6C').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });

    })



    this.http.get(this.apiRoot+'/api/tool_category_data/136/').subscribe(data =>{
      this._labListed7 = data as [any];
      if (this._labListed7.Tool_efficiency === false) {
        $('#lab7').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed7.Tool_efficiency === true) {
        $('#lab7').css({fill: "rgba(140, 192, 19, 0.88)"});
      }

      $("#lab7").hover(()=>{
        if (this._labListed7.Tool_Category === "Qualifications") {
            $('#lab7').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed7.Tool_Category === "Field Issues") {
            $('#lab7').css("fill", "rgb(255, 193, 203)");

        }
        else if (this._labListed7.Tool_Category === "Process") {
            $('#lab7').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed7.Tool_efficiency === false) {
            $('#lab7').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed7.Tool_efficiency === true) {
            $('#lab7').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });

    })


    this.http.get(this.apiRoot+'/api/tool_category_data/100/').subscribe(data =>{
      this._labListed8a = data as [any];
      if (this._labListed8a.Tool_efficiency === false) {
        $('#lab8a').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed8a.Tool_efficiency === true) {
        $('#lab8a').css({fill: "rgba(140, 192, 19, 0.88)"});
      }
      $("#lab8a").hover(()=>{
        if (this._labListed8a.Tool_Category === "Qualifications") {
            $('#lab8a').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed8a.Tool_Category === "Field Issues") {
            $('#lab8a').css("fill", "rgb(255, 193, 203)");
        }
        else if (this._labListed8a.Tool_Category === "Process") {
            $('#lab8a').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed8a.Tool_efficiency === false) {
            $('#lab8a').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed8a.Tool_efficiency === true) {
            $('#lab8a').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });
    })

    this.http.get(this.apiRoot+'/api/tool_category_data/135/').subscribe(data =>{
        this._labListed8b = data as [any];
        if (this._labListed8b.Tool_efficiency === false) {
          $('#lab8b').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed8b.Tool_efficiency === true) {
          $('#lab8b').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
        $("#lab8b").hover(()=>{
          if (this._labListed8b.Tool_Category === "Qualifications") {
              $('#lab8b').css("fill", "rgb(125, 109, 196)");
          }
          else if (this._labListed8b.Tool_Category === "Field Issues") {
              $('#lab8b').css("fill", "rgb(255, 193, 203)");
          }
          else if (this._labListed8b.Tool_Category === "Process") {
              $('#lab8b').css({fill: "#aee9ca"});
          }
      },
       ()=> {
          if (this._labListed8b.Tool_efficiency === false) {
              $('#lab8b').css({fill: "rgba(239, 9, 9, 0.78)"});
          }
          else if (this._labListed8b.Tool_efficiency === true) {
              $('#lab8b').css({fill: "rgba(140, 192, 19, 0.88)"});
          }
      });
      })
  


    // this.http.get(this.apiRoot+'/api/tool_category_data/75/').subscribe(data =>{
    //   this._labListed9 = data as [any];
    //   if (this._labListed9.Tool_efficiency === false) {
    //     $('#lab9').css({fill: "rgba(239, 9, 9, 0.78)"});
    //   }
    //   else if (this._labListed9.Tool_efficiency === true) {
    //     $('#lab9').css({fill: "rgba(140, 192, 19, 0.88)"});
    //   }

    //   $("#lab9").hover(()=>{
    //     if (this._labListed9.Tool_Category === "Qualifications") {
    //         $('#lab9').css("fill", "rgb(125, 109, 196)");
    //     }
    //     else if (this._labListed9.Tool_Category === "Field Issues") {
    //         $('#lab9').css("fill", "rgb(255, 193, 203)");

    //     }
    //     else if (this._labListed9.Tool_Category === "Process") {
    //         $('#lab9').css({fill: "#aee9ca"});
    //     }
    // },
    //  ()=> {
    //     if (this._labListed9.Tool_efficiency === false) {
    //         $('#lab9').css({fill: "rgba(239, 9, 9, 0.78)"});
    //     }
    //     else if (this._labListed9.Tool_efficiency === true) {
    //         $('#lab9').css({fill: "rgba(140, 192, 19, 0.88)"});
    //     }
    // });

    // })


    this.http.get(this.apiRoot+'/api/tool_category_data/18/').subscribe(data =>{
      this._labListed10 = data as [any];
      if (this._labListed10.Tool_efficiency === false) {
        $('#lab10').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed10.Tool_efficiency === true) {
        $('#lab10').css({fill: "rgba(140, 192, 19, 0.88)"});
      }

      $("#lab10").hover(()=>{
        if (this._labListed10.Tool_Category === "Qualifications") {
            $('#lab10').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed10.Tool_Category === "Field Issues") {
            $('#lab10').css("fill", "rgb(255, 193, 203)");

        }
        else if (this._labListed10.Tool_Category === "Process") {
            $('#lab10').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed10.Tool_efficiency === false) {
            $('#lab10').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed10.Tool_efficiency === true) {
            $('#lab10').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });

    })

    this.http.get(this.apiRoot+'/api/tool_category_data/26/').subscribe(data =>{
        console.log(data);
        this._labListed11a = data as [any];
        if (this._labListed11a.Tool_efficiency === false) {
          $('#lab11a').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed11a.Tool_efficiency === true) {
          $('#lab11a').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
  
        $("#lab11a").hover(()=>{
          if (this._labListed11a.Tool_Category === "Qualifications") {
              $('#lab11a').css("fill", "rgb(125, 109, 196)");
          }
          else if (this._labListed11a.Tool_Category === "Field Issues") {
              $('#lab11a').css("fill", "rgb(255, 193, 203)");
  
          }
          else if (this._labListed11a.Tool_Category === "Process") {
              $('#lab11a').css({fill: "#aee9ca"});
          }
      },
       ()=> {
          if (this._labListed11a.Tool_efficiency === false) {
              $('#lab11a').css({fill: "rgba(239, 9, 9, 0.78)"});
          }
          else if (this._labListed11a.Tool_efficiency === true) {
              $('#lab11a').css({fill: "rgba(140, 192, 19, 0.88)"});
          }
      });
  
      })
  
      this.http.get(this.apiRoot+'/api/tool_category_data/141/').subscribe(data =>{
          this._labListed11b = data as [any];
          if (this._labListed11b.Tool_efficiency === false) {
            $('#lab11b').css({fill: "rgba(239, 9, 9, 0.78)"});
          }
          else if (this._labListed11b.Tool_efficiency === true) {
            $('#lab11b').css({fill: "rgba(140, 192, 19, 0.88)"});
          }
    
          $("#lab11b").hover(()=>{
            if (this._labListed11b.Tool_Category === "Qualifications") {
                $('#lab11b').css("fill", "rgb(125, 109, 196)");
            }
            else if (this._labListed11b.Tool_Category === "Field Issues") {
                $('#lab11b').css("fill", "rgb(255, 193, 203)");
    
            }
            else if (this._labListed11b.Tool_Category === "Process") {
                $('#lab11b').css({fill: "#aee9ca"});
            }
        },
         ()=> {
            if (this._labListed11b.Tool_efficiency === false) {
                $('#lab11b').css({fill: "rgba(239, 9, 9, 0.78)"});
            }
            else if (this._labListed11b.Tool_efficiency === true) {
                $('#lab11b').css({fill: "rgba(140, 192, 19, 0.88)"});
            }
        });
        })
  


    // this.http.get(this.apiRoot+'/api/tool_category_data/50/').subscribe(data =>{
    //   this._labListed12 = data as [any];
    //   if (this._labListed12.Tool_efficiency === false) {
    //     $('#lab12').css({fill: "rgba(239, 9, 9, 0.78)"});
    //   }
    //   else if (this._labListed12.Tool_efficiency === true) {
    //     $('#lab12').css({fill: "rgba(140, 192, 19, 0.88)"});
    //   }

    //   $("#lab12").hover(()=>{
    //     if (this._labListed12.Tool_Category === "Qualifications") {
    //         $('#lab12').css("fill", "rgb(125, 109, 196)");
    //     }
    //     else if (this._labListed12.Tool_Category === "Field Issues") {
    //         $('#lab12').css("fill", "rgb(255, 193, 203)");

    //     }
    //     else if (this._labListed12.Tool_Category === "Process") {
    //         $('#lab12').css({fill: "#aee9ca"});
    //     }
    // },
    //  ()=> {
    //     if (this._labListed12.Tool_efficiency === false) {
    //         $('#lab12').css({fill: "rgba(239, 9, 9, 0.78)"});
    //     }
    //     else if (this._labListed12.Tool_efficiency === true) {
    //         $('#lab12').css({fill: "rgba(140, 192, 19, 0.88)"});
    //     }
    // });

    // })

    this.http.get(this.apiRoot+'/api/tool_category_data/50/').subscribe(data =>{
        this._labListed12a = data as [any];
        if (this._labListed12a.Tool_efficiency === false) {
          $('#lab12a').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed12a.Tool_efficiency === true) {
          $('#lab12a').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
  
        $("#lab12a").hover(()=>{
          if (this._labListed12a.Tool_Category === "Qualifications") {
              $('#lab12a').css("fill", "rgb(125, 109, 196)");
          }
          else if (this._labListed12a.Tool_Category === "Field Issues") {
              $('#lab12a').css("fill", "rgb(255, 193, 203)");
  
          }
          else if (this._labListed12a.Tool_Category === "Process") {
              $('#lab12a').css({fill: "#aee9ca"});
          }
      },
       ()=> {
          if (this._labListed12a.Tool_efficiency === false) {
              $('#lab12a').css({fill: "rgba(239, 9, 9, 0.78)"});
          }
          else if (this._labListed12a.Tool_efficiency === true) {
              $('#lab12a').css({fill: "rgba(140, 192, 19, 0.88)"});
          }
      });
  
      })
  
  
      this.http.get(this.apiRoot+'/api/tool_category_data/125/').subscribe(data =>{
          this._labListed12b = data as [any];
          if (this._labListed12b.Tool_efficiency === false) {
            $('#lab12b').css({fill: "rgba(239, 9, 9, 0.78)"});
          }
          else if (this._labListed12b.Tool_efficiency === true) {
            $('#lab12b').css({fill: "rgba(140, 192, 19, 0.88)"});
          }
    
          $("#lab12b").hover(()=>{
            if (this._labListed12b.Tool_Category === "Qualifications") {
                $('#lab12b').css("fill", "rgb(125, 109, 196)");
            }
            else if (this._labListed12b.Tool_Category === "Field Issues") {
                $('#lab12b').css("fill", "rgb(255, 193, 203)");
    
            }
            else if (this._labListed12b.Tool_Category === "Process") {
                $('#lab12b').css({fill: "#aee9ca"});
            }
        },
         ()=> {
            if (this._labListed12b.Tool_efficiency === false) {
                $('#lab12b').css({fill: "rgba(239, 9, 9, 0.78)"});
            }
            else if (this._labListed12b.Tool_efficiency === true) {
                $('#lab12b').css({fill: "rgba(140, 192, 19, 0.88)"});
            }
        });
    
        })

    this.http.get(this.apiRoot+'/api/tool_category_data/86/').subscribe(data =>{
      this._labListed13 = data as [any];
      if (this._labListed13.Tool_efficiency === false) {
        $('#lab13').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed13.Tool_efficiency === true) {
        $('#lab13').css({fill: "rgba(140, 192, 19, 0.88)"});
      }

      $("#lab13").hover(()=>{
        if (this._labListed13.Tool_Category === "Qualifications") {
            $('#lab13').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed13.Tool_Category === "Field Issues") {
            $('#lab13').css("fill", "rgb(255, 193, 203)");

        }
        else if (this._labListed13.Tool_Category === "Process") {
            $('#lab13').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed13.Tool_efficiency === false) {
            $('#lab13').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed13.Tool_efficiency === true) {
            $('#lab13').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });

    })


    this.http.get(this.apiRoot+'/api/tool_category_data/27/').subscribe(data =>{
      this._labListed14 = data as [any];
      if (this._labListed14.Tool_efficiency === false) {
        $('#lab14').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed14.Tool_efficiency === true) {
        $('#lab14').css({fill: "rgba(140, 192, 19, 0.88)"});
      }

      $("#lab14").hover(()=>{
        if (this._labListed14.Tool_Category === "Qualifications") {
            $('#lab14').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed14.Tool_Category === "Field Issues") {
            $('#lab14').css("fill", "rgb(255, 193, 203)");

        }
        else if (this._labListed14.Tool_Category === "Process") {
            $('#lab14').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed14.Tool_efficiency === false) {
            $('#lab14').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed1.Tool_efficiency === true) {
            $('#lab14').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });

    })

    this.http.get(this.apiRoot+'/api/tool_category_data/139/').subscribe(data =>{
      this._labListed15 = data as [any];
      if (this._labListed15.Tool_efficiency === false) {
        $('#lab15').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed15.Tool_efficiency === true) {
        $('#lab15').css({fill: "rgba(140, 192, 19, 0.88)"});
      }

      $("#lab15").hover(()=>{
        if (this._labListed15.Tool_Category === "Qualifications") {
            $('#lab15').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed15.Tool_Category === "Field Issues") {
            $('#lab15').css("fill", "rgb(255, 193, 203)");

        }
        else if (this._labListed15.Tool_Category === "Process") {
            $('#lab15').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed15.Tool_efficiency === false) {
            $('#lab15').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed15.Tool_efficiency === true) {
            $('#lab15').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });

    })


    this.http.get(this.apiRoot+'/api/tool_category_data/99/').subscribe(data =>{
      this._labListed16 = data as [any];
      if (this._labListed16.Tool_efficiency === false) {
        $('#lab16').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed16.Tool_efficiency === true) {
        $('#lab16').css({fill: "rgba(140, 192, 19, 0.88)"});
      }

      $("#lab16").hover(()=>{
        if (this._labListed16.Tool_Category === "Qualifications") {
            $('#lab16').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed16.Tool_Category === "Field Issues") {
            $('#lab16').css("fill", "rgb(255, 193, 203)");

        }
        else if (this._labListed16.Tool_Category === "Process") {
            $('#lab16').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed16.Tool_efficiency === false) {
            $('#lab16').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed16.Tool_efficiency === true) {
            $('#lab16').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });

    })


    this.http.get(this.apiRoot+'/api/tool_category_data/132/').subscribe(data =>{
      this._labListed17 = data as [any];
      if (this._labListed17.Tool_efficiency === false) {
        $('#lab17').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed17.Tool_efficiency === true) {
        $('#lab17').css({fill: "rgba(140, 192, 19, 0.88)"});
      }

      $("#lab17").hover(()=>{
        if (this._labListed17.Tool_Category === "Qualifications") {
            $('#lab17').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed17.Tool_Category === "Field Issues") {
            $('#lab17').css("fill", "rgb(255, 193, 203)");

        }
        else if (this._labListed17.Tool_Category === "Process") {
            $('#lab17').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed17.Tool_efficiency === false) {
            $('#lab17').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed17.Tool_efficiency === true) {
            $('#lab17').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });

    })


    this.http.get(this.apiRoot+'/api/tool_category_data/123/').subscribe(data =>{
      this._labListed18 = data as [any];
      if (this._labListed18.Tool_efficiency === false) {
        $('#lab18').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed18.Tool_efficiency === true) {
        $('#lab18').css({fill: "rgba(140, 192, 19, 0.88)"});
      }

      $("#lab18").hover(()=>{
        if (this._labListed18.Tool_Category === "Qualifications") {
            $('#lab18').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed18.Tool_Category === "Field Issues") {
            $('#lab18').css("fill", "rgb(255, 193, 203)");

        }
        else if (this._labListed18.Tool_Category === "Process") {
            $('#lab18').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed18.Tool_efficiency === false) {
            $('#lab18').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed18.Tool_efficiency === true) {
            $('#lab18').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });

    })


    this.http.get(this.apiRoot+'/api/tool_category_data/55/').subscribe(data =>{
      this._labListed19 = data as [any];
      if (this._labListed19.Tool_efficiency === false) {
        $('#lab19').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed19.Tool_efficiency === true) {
        $('#lab19').css({fill: "rgba(140, 192, 19, 0.88)"});
      }

      $("#lab19").hover(()=>{
        if (this._labListed19.Tool_Category === "Qualifications") {
            $('#lab19').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed19.Tool_Category === "Field Issues") {
            $('#lab19').css("fill", "rgb(255, 193, 203)");

        }
        else if (this._labListed19.Tool_Category === "Process") {
            $('#lab19').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed19.Tool_efficiency === false) {
            $('#lab19').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed19.Tool_efficiency === true) {
            $('#lab19').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });

    })


 this.http.get(this.apiRoot+'/api/tool_category_data/72/').subscribe(data =>{
      console.log(data);
      this._labListed20 = data as [any];
      if (this._labListed20.Tool_efficiency === false) {
        $('#lab20').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed20.Tool_efficiency === true) {
        $('#lab20').css({fill: "rgba(140, 192, 19, 0.88)"});
      }

      $("#lab20").hover(()=>{
        if (this._labListed20.Tool_Category === "Qualifications") {
            $('#lab20').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed20.Tool_Category === "Field Issues") {
            $('#lab20').css("fill", "rgb(255, 193, 203)");

        }
        else if (this._labListed20.Tool_Category === "Process") {
            $('#lab20').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed20.Tool_efficiency === false) {
            $('#lab20').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed20.Tool_efficiency === true) {
            $('#lab20').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });

    })


    this.http.get(this.apiRoot+'/api/tool_category_data/116/').subscribe(data =>{
      this._labListed21 = data as [any];
      if (this._labListed21.Tool_efficiency === false) {
        $('#lab21').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed21.Tool_efficiency === true) {
        $('#lab21').css({fill: "rgba(140, 192, 19, 0.88)"});
      }

      $("#lab21").hover(()=>{
        if (this._labListed21.Tool_Category === "Qualifications") {
            $('#lab21').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed21.Tool_Category === "Field Issues") {
            $('#lab21').css("fill", "rgb(255, 193, 203)");

        }
        else if (this._labListed21.Tool_Category === "Process") {
            $('#lab21').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed21.Tool_efficiency === false) {
            $('#lab21').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed21.Tool_efficiency === true) {
            $('#lab21').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });

    })


    this.http.get(this.apiRoot+'/api/tool_category_data/52/').subscribe(data =>{
      this._labListed22 = data as [any];
      if (this._labListed22.Tool_efficiency === false) {
        $('#lab22').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed22.Tool_efficiency === true) {
        $('#lab22').css({fill: "rgba(140, 192, 19, 0.88)"});
      }

      $("#lab22").hover(()=>{
        if (this._labListed22.Tool_Category === "Qualifications") {
            $('#lab22').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed22.Tool_Category === "Field Issues") {
            $('#lab22').css("fill", "rgb(255, 193, 203)");

        }
        else if (this._labListed22.Tool_Category === "Process") {
            $('#lab22').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed22.Tool_efficiency === false) {
            $('#lab22').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed22.Tool_efficiency === true) {
            $('#lab22').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });

    })


//     this.http.get(this.apiRoot+'/api/tool_category_data/52/').subscribe(data =>{
//       console.log(data);
//       this._labListed23 = data as [any];
//       if (this._labListed23.Tool_efficiency === false) {
//         $('#lab23').css({fill: "rgba(239, 9, 9, 0.78)"});
//       }
//       else if (this._labListed23.Tool_efficiency === true) {
//         $('#lab23').css({fill: "rgba(140, 192, 19, 0.88)"});
//       }

//       $("#lab23").hover(()=>{
//         if (this._labListed23.Tool_Category === "Qualifications") {
//             $('#lab23').css("fill", "rgb(125, 109, 196)");
//         }
//         else if (this._labListed23.Tool_Category === "Field Issues") {
//             $('#lab23').css("fill", "rgb(255, 193, 203)");

//         }
//         else if (this._labListed23.Tool_Category === "Process") {
//             $('#lab23').css({fill: "#aee9ca"});
//         }
//     },
//      ()=> {
//         if (this._labListed23.Tool_efficiency === false) {
//             $('#lab23').css({fill: "rgba(239, 9, 9, 0.78)"});
//         }
//         else if (this._labListed23.Tool_efficiency === true) {
//             $('#lab23').css({fill: "rgba(140, 192, 19, 0.88)"});
//         }
//     });

//     })


    // this.http.get(this.apiRoot+'/api/tool_category_data/14/').subscribe(data =>{
    //   this._labListed24 = data as [any];
    //   if (this._labListed24.Tool_efficiency === false) {
    //     $('#lab24').css({fill: "rgba(239, 9, 9, 0.78)"});
    //   }
    //   else if (this._labListed24.Tool_efficiency === true) {
    //     $('#lab24').css({fill: "rgba(140, 192, 19, 0.88)"});
    //   }

    //   $("#lab24").hover(()=>{
    //     if (this._labListed24.Tool_Category === "Qualifications") {
    //         $('#lab24').css("fill", "rgb(125, 109, 196)");
    //     }
    //     else if (this._labListed24.Tool_Category === "Field Issues") {
    //         $('#lab24').css("fill", "rgb(255, 193, 203)");

    //     }
    //     else if (this._labListed24.Tool_Category === "Process") {
    //         $('#lab24').css({fill: "#aee9ca"});
    //     }
    // },
    //  ()=> {
    //     if (this._labListed24.Tool_efficiency === false) {
    //         $('#lab24').css({fill: "rgba(239, 9, 9, 0.78)"});
    //     }
    //     else if (this._labListed24.Tool_efficiency === true) {
    //         $('#lab24').css({fill: "rgba(140, 192, 19, 0.88)"});
    //     }
    // });
    // })

    this.http.get(this.apiRoot+'/api/tool_category_data/129/').subscribe(data =>{
        this._labListed24a = data as [any];
        if (this._labListed24a.Tool_efficiency === false) {
          $('#lab24a').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed24a.Tool_efficiency === true) {
          $('#lab24a').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
  
        $("#lab24a").hover(()=>{
          if (this._labListed24a.Tool_Category === "Qualifications") {
              $('#lab24a').css("fill", "rgb(125, 109, 196)");
          }
          else if (this._labListed24a.Tool_Category === "Field Issues") {
              $('#lab24a').css("fill", "rgb(255, 193, 203)");
  
          }
          else if (this._labListed24a.Tool_Category === "Process") {
              $('#lab24a').css({fill: "#aee9ca"});
          }
      },
       ()=> {
          if (this._labListed24a.Tool_efficiency === false) {
              $('#lab24a').css({fill: "rgba(239, 9, 9, 0.78)"});
          }
          else if (this._labListed24a.Tool_efficiency === true) {
              $('#lab24a').css({fill: "rgba(140, 192, 19, 0.88)"});
          }
      });
      })

    //   this.http.get(this.apiRoot+'/api/tool_category_data/142/').subscribe(data =>{
    //     this._labListed24b = data as [any];
    //     if (this._labListed24b.Tool_efficiency === false) {
    //       $('#lab24b').css({fill: "rgba(239, 9, 9, 0.78)"});
    //     }
    //     else if (this._labListed24b.Tool_efficiency === true) {
    //       $('#lab24b').css({fill: "rgba(140, 192, 19, 0.88)"});
    //     }
  
    //     $("#lab24b").hover(()=>{
    //       if (this._labListed24b.Tool_Category === "Qualifications") {
    //           $('#lab24b').css("fill", "rgb(125, 109, 196)");
    //       }
    //       else if (this._labListed24b.Tool_Category === "Field Issues") {
    //           $('#lab24b').css("fill", "rgb(255, 193, 203)");
  
    //       }
    //       else if (this._labListed24b.Tool_Category === "Process") {
    //           $('#lab24b').css({fill: "#aee9ca"});
    //       }
    //   },
    //    ()=> {
    //       if (this._labListed24b.Tool_efficiency === false) {
    //           $('#lab24b').css({fill: "rgba(239, 9, 9, 0.78)"});
    //       }
    //       else if (this._labListed24b.Tool_efficiency === true) {
    //           $('#lab24b').css({fill: "rgba(140, 192, 19, 0.88)"});
    //       }
    //   });
    //   })




    // this.http.get(this.apiRoot+'/api/tool_category_data/65/').subscribe(data =>{
    //     this._labListed25a = data as [any];
    //     if (this._labListed25a.Tool_efficiency === false) {
    //       $('#lab25a').css({fill: "rgba(239, 9, 9, 0.78)"});
    //     }
    //     else if (this._labListed25a.Tool_efficiency === true) {
    //       $('#lab25a').css({fill: "rgba(140, 192, 19, 0.88)"});
    //     }
  
    //     $("#lab25a").hover(()=>{
    //       if (this._labListed25a.Tool_Category === "Qualifications") {
    //           $('#lab25a').css("fill", "rgb(125, 109, 196)");
    //       }
    //       else if (this._labListed25a.Tool_Category === "Field Issues") {
    //           $('#lab25a').css("fill", "rgb(255, 193, 203)");
  
    //       }
    //       else if (this._labListed25a.Tool_Category === "Process") {
    //           $('#lab25a').css({fill: "#aee9ca"});
    //       }
    //   },
    //    ()=> {
    //       if (this._labListed25a.Tool_efficiency === false) {
    //           $('#lab25a').css({fill: "rgba(239, 9, 9, 0.78)"});
    //       }
    //       else if (this._labListed25a.Tool_efficiency === true) {
    //           $('#lab25a').css({fill: "rgba(140, 192, 19, 0.88)"});
    //       }
    //   });
  
    //   })



    this.http.get(this.apiRoot+'/api/tool_category_data/16/').subscribe(data =>{
        this._labListed25 = data as [any];
    
        if (this._labListed25.Tool_efficiency === false) {
          $('#lab25').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed25.Tool_efficiency === true) {
          $('#lab25').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
  
        $("#lab25").hover(()=>{
          if (this._labListed25.Tool_Category === "Qualifications") {
              $('#lab25').css("fill", "rgb(125, 109, 196)");
          }
          else if (this._labListed25.Tool_Category === "Field Issues") {
              $('#lab25').css("fill", "rgb(255, 193, 203)");
  
          }
          else if (this._labListed25.Tool_Category === "Process") {
              $('#lab25').css({fill: "#aee9ca"});
          }
      },
       ()=> {
          if (this._labListed25.Tool_efficiency === false) {
              $('#lab25').css({fill: "rgba(239, 9, 9, 0.78)"});
          }
          else if (this._labListed25.Tool_efficiency === true) {
              $('#lab25').css({fill: "rgba(140, 192, 19, 0.88)"});
          }
      });
  
      })

  
    //   this.http.get(this.apiRoot+'/api/tool_category_data/16/').subscribe(data =>{
    //       this._labListed25b = data as [any];
    //       if (this._labListed25b.Tool_efficiency === false) {
    //         $('#lab25b').css({fill: "rgba(239, 9, 9, 0.78)"});
    //       }
    //       else if (this._labListed25b.Tool_efficiency === true) {
    //         $('#lab25b').css({fill: "rgba(140, 192, 19, 0.88)"});
    //       }
    
    //       $("#lab25b").hover(()=>{
    //         if (this._labListed25b.Tool_Category === "Qualifications") {
    //             $('#lab25b').css("fill", "rgb(125, 109, 196)");
    //         }
    //         else if (this._labListed25b.Tool_Category === "Field Issues") {
    //             $('#lab25b').css("fill", "rgb(255, 193, 203)");
    
    //         }
    //         else if (this._labListed25b.Tool_Category === "Process") {
    //             $('#lab25b').css({fill: "#aee9ca"});
    //         }
    //     },
    //      ()=> {
    //         if (this._labListed25b.Tool_efficiency === false) {
    //             $('#lab25b').css({fill: "rgba(239, 9, 9, 0.78)"});
    //         }
    //         else if (this._labListed25b.Tool_efficiency === true) {
    //             $('#lab25b').css({fill: "rgba(140, 192, 19, 0.88)"});
    //         }
    //     });
    
    //     })
    
  

    this.http.get(this.apiRoot+'/api/tool_category_data/15/').subscribe(data =>{
      this._labListed26 = data as [any];
      if (this._labListed26.Tool_efficiency === false) {
        $('#lab26').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed26.Tool_efficiency === true) {
        $('#lab26').css({fill: "rgba(140, 192, 19, 0.88)"});
      }

      $("#lab26").hover(()=>{
        if (this._labListed26.Tool_Category === "Qualifications") {
            $('#lab26').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed26.Tool_Category === "Field Issues") {
            $('#lab26').css("fill", "rgb(255, 193, 203)");

        }
        else if (this._labListed26.Tool_Category === "Process") {
            $('#lab26').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed26.Tool_efficiency === false) {
            $('#lab26').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed26.Tool_efficiency === true) {
            $('#lab26').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });

    })


    this.http.get(this.apiRoot+'/api/tool_category_data/161/').subscribe(data =>{
      this._labListed27 = data as [any];
      if (this._labListed27.Tool_efficiency === false) {
        $('#lab27').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed27.Tool_efficiency === true) {
        $('#lab27').css({fill: "rgba(140, 192, 19, 0.88)"});
      }

      $("#lab27").hover(()=>{
        if (this._labListed27.Tool_Category === "Qualifications") {
            $('#lab27').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed27.Tool_Category === "Field Issues") {
            $('#lab27').css("fill", "rgb(255, 193, 203)");

        }
        else if (this._labListed27.Tool_Category === "Process") {
            $('#lab27').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed27.Tool_efficiency === false) {
            $('#lab27').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed27.Tool_efficiency === true) {
            $('#lab27').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });

    })


    this.http.get(this.apiRoot+'/api/tool_category_data/88/').subscribe(data =>{
      this._labListed28 = data as [any];
      if (this._labListed28.Tool_efficiency === false) {
        $('#lab28').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed28.Tool_efficiency === true) {
        $('#lab28').css({fill: "rgba(140, 192, 19, 0.88)"});
      }

      $("#lab28").hover(()=>{
        if (this._labListed28.Tool_Category === "Qualifications") {
            $('#lab28').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed28.Tool_Category === "Field Issues") {
            $('#lab28').css("fill", "rgb(255, 193, 203)");

        }
        else if (this._labListed28.Tool_Category === "Process") {
            $('#lab28').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed28.Tool_efficiency === false) {
            $('#lab28').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed28.Tool_efficiency === true) {
            $('#lab28').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });

    })


    this.http.get(this.apiRoot+'/api/tool_category_data/59/').subscribe(data =>{
      this._labListed29 = data as [any];
      if (this._labListed29.Tool_efficiency === false) {
        $('#lab29').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed29.Tool_efficiency === true) {
        $('#lab29').css({fill: "rgba(140, 192, 19, 0.88)"});
      }

      $("#lab29").hover(()=>{
        if (this._labListed29.Tool_Category === "Qualifications") {
            $('#lab29').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed29.Tool_Category === "Field Issues") {
            $('#lab29').css("fill", "rgb(255, 193, 203)");

        }
        else if (this._labListed29.Tool_Category === "Process") {
            $('#lab29').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed29.Tool_efficiency === false) {
            $('#lab29').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed29.Tool_efficiency === true) {
            $('#lab29').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });

    })


    this.http.get(this.apiRoot+'/api/tool_category_data/110/').subscribe(data =>{
      this._labListed30 = data as [any];
      if (this._labListed30.Tool_efficiency === false) {
        $('#lab30').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed30.Tool_efficiency === true) {
        $('#lab30').css({fill: "rgba(140, 192, 19, 0.88)"});
      }

      $("#lab30").hover(()=>{
        if (this._labListed30.Tool_Category === "Qualifications") {
            $('#lab30').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed30.Tool_Category === "Field Issues") {
            $('#lab30').css("fill", "rgb(255, 193, 203)");

        }
        else if (this._labListed30.Tool_Category === "Process") {
            $('#lab30').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed30.Tool_efficiency === false) {
            $('#lab30').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed30.Tool_efficiency === true) {
            $('#lab30').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });

    })


    this.http.get(this.apiRoot+'/api/tool_category_data/126/').subscribe(data =>{
      this._labListed31a = data as [any];
      if (this._labListed31a.Tool_efficiency === false) {
        $('#lab31a').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed31a.Tool_efficiency === true) {
        $('#lab31a').css({fill: "rgba(140, 192, 19, 0.88)"});
      }

      $("#lab31a").hover(()=>{
        if (this._labListed31a.Tool_Category === "Qualifications") {
            $('#lab31a').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed31a.Tool_Category === "Field Issues") {
            $('#lab31a').css("fill", "rgb(255, 193, 203)");

        }
        else if (this._labListed31a.Tool_Category === "Process") {
            $('#lab31a').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed31a.Tool_efficiency === false) {
            $('#lab31a').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed31a.Tool_efficiency === true) {
            $('#lab31a').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });
    })

    this.http.get(this.apiRoot+'/api/tool_category_data/148/').subscribe(data =>{
        this._labListed31b = data as [any];
        if (this._labListed31b.Tool_efficiency === false) {
          $('#lab31b').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed31b.Tool_efficiency === true) {
          $('#lab31b').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
  
        $("#lab31b").hover(()=>{
          if (this._labListed31b.Tool_Category === "Qualifications") {
              $('#lab31b').css("fill", "rgb(125, 109, 196)");
          }
          else if (this._labListed31b.Tool_Category === "Field Issues") {
              $('#lab31b').css("fill", "rgb(255, 193, 203)");
  
          }
          else if (this._labListed31b.Tool_Category === "Process") {
              $('#lab31b').css({fill: "#aee9ca"});
          }
      },
       ()=> {
          if (this._labListed31b.Tool_efficiency === false) {
              $('#lab31b').css({fill: "rgba(239, 9, 9, 0.78)"});
          }
          else if (this._labListed31b.Tool_efficiency === true) {
              $('#lab31b').css({fill: "rgba(140, 192, 19, 0.88)"});
          }
      });
      })


 this.http.get(this.apiRoot+'/api/tool_category_data/112/').subscribe(data =>{
      this._labListed32 = data as [any];
      if (this._labListed32.Tool_efficiency === false) {
        $('#lab32').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed32.Tool_efficiency === true) {
        $('#lab32').css({fill: "rgba(140, 192, 19, 0.88)"});
      }

      $("#lab32").hover(()=>{
        if (this._labListed32.Tool_Category === "Qualifications") {
            $('#lab32').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed32.Tool_Category === "Field Issues") {
            $('#lab32').css("fill", "rgb(255, 193, 203)");

        }
        else if (this._labListed32.Tool_Category === "Process") {
            $('#lab32').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed32.Tool_efficiency === false) {
            $('#lab32').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed32.Tool_efficiency === true) {
            $('#lab32').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });

    })


    this.http.get(this.apiRoot+'/api/tool_category_data/112/').subscribe(data =>{
      this._labListed33 = data as [any];
      if (this._labListed33.Tool_efficiency === false) {
        $('#lab33').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed33.Tool_efficiency === true) {
        $('#lab33').css({fill: "rgba(140, 192, 19, 0.88)"});
      }

      $("#lab33").hover(()=>{
        if (this._labListed33.Tool_Category === "Qualifications") {
            $('#lab33').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed33.Tool_Category === "Field Issues") {
            $('#lab33').css("fill", "rgb(255, 193, 203)");

        }
        else if (this._labListed33.Tool_Category === "Process") {
            $('#lab33').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed33.Tool_efficiency === false) {
            $('#lab33').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed33.Tool_efficiency === true) {
            $('#lab33').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });

    })


    this.http.get(this.apiRoot+'/api/tool_category_data/115/').subscribe(data =>{
      this._labListed34 = data as [any];
      if (this._labListed34.Tool_efficiency === false) {
        $('#lab34').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed34.Tool_efficiency === true) {
        $('#lab34').css({fill: "rgba(140, 192, 19, 0.88)"});
      }

      $("#lab34").hover(()=>{
        if (this._labListed34.Tool_Category === "Qualifications") {
            $('#lab34').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed34.Tool_Category === "Field Issues") {
            $('#lab34').css("fill", "rgb(255, 193, 203)");

        }
        else if (this._labListed34.Tool_Category === "Process") {
            $('#lab34').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed34.Tool_efficiency === false) {
            $('#lab34').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed34.Tool_efficiency === true) {
            $('#lab34').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });

     })


    this.http.get(this.apiRoot+'/api/tool_category_data/122/').subscribe(data =>{
      this._labListed35 = data as [any];
      if (this._labListed35.Tool_efficiency === false) {
        $('#lab35').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed35.Tool_efficiency === true) {
        $('#lab35').css({fill: "rgba(140, 192, 19, 0.88)"});
      }

      $("#lab35").hover(()=>{
        if (this._labListed35.Tool_Category === "Qualifications") {
            $('#lab35').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed35.Tool_Category === "Field Issues") {
            $('#lab35').css("fill", "rgb(255, 193, 203)");

        }
        else if (this._labListed35.Tool_Category === "Process") {
            $('#lab35').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed35.Tool_efficiency === false) {
            $('#lab35').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed35.Tool_efficiency === true) {
            $('#lab35').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });

    })


    this.http.get(this.apiRoot+'/api/tool_category_data/61/').subscribe(data =>{
      this._labListed36 = data as [any];
      if (this._labListed36.Tool_efficiency === false) {
        $('#lab36').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed36.Tool_efficiency === true) {
        $('#lab36').css({fill: "rgba(140, 192, 19, 0.88)"});
      }

      $("#lab36").hover(()=>{
        if (this._labListed36.Tool_Category === "Qualifications") {
            $('#lab36').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed36.Tool_Category === "Field Issues") {
            $('#lab36').css("fill", "rgb(255, 193, 203)");

        }
        else if (this._labListed36.Tool_Category === "Process") {
            $('#lab36').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed36.Tool_efficiency === false) {
            $('#lab36').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed36.Tool_efficiency === true) {
            $('#lab36').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });

    })


    this.http.get(this.apiRoot+'/api/tool_category_data/68/').subscribe(data =>{
      this._labListed37 = data as [any];
      if (this._labListed37.Tool_efficiency === false) {
        $('#lab37').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed37.Tool_efficiency === true) {
        $('#lab37').css({fill: "rgba(140, 192, 19, 0.88)"});
      }

      $("#lab37").hover(()=>{
        if (this._labListed37.Tool_Category === "Qualifications") {
            $('#lab37').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed37.Tool_Category === "Field Issues") {
            $('#lab37').css("fill", "rgb(255, 193, 203)");

        }
        else if (this._labListed37.Tool_Category === "Process") {
            $('#lab37').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed37.Tool_efficiency === false) {
            $('#lab37').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed37.Tool_efficiency === true) {
            $('#lab37').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });

    })


    // this.http.get(this.apiRoot+'/api/tool_category_data/43/').subscribe(data =>{
    //   this._labListed38 = data as [any];
    //   if (this._labListed38.Tool_efficiency === false) {
    //     $('#lab38').css({fill: "rgba(239, 9, 9, 0.78)"});
    //   }
    //   else if (this._labListed38.Tool_efficiency === true) {
    //     $('#lab38').css({fill: "rgba(140, 192, 19, 0.88)"});
    //   }

    //   $("#lab38").hover(()=>{
    //     if (this._labListed38.Tool_Category === "Qualifications") {
    //         $('#lab38').css("fill", "rgb(125, 109, 196)");
    //     }
    //     else if (this._labListed38.Tool_Category === "Field Issues") {
    //         $('#lab38').css("fill", "rgb(255, 193, 203)");

    //     }
    //     else if (this._labListed38.Tool_Category === "Process") {
    //         $('#lab38').css({fill: "#aee9ca"});
    //     }
    // },
    //  ()=> {
    //     if (this._labListed38.Tool_efficiency === false) {
    //         $('#lab38').css({fill: "rgba(239, 9, 9, 0.78)"});
    //     }
    //     else if (this._labListed38.Tool_efficiency === true) {
    //         $('#lab38').css({fill: "rgba(140, 192, 19, 0.88)"});
    //     }
    // });

    // })

    this.http.get(this.apiRoot+'/api/tool_category_data/133/').subscribe(data =>{
        this._labListed38a = data as [any];
        if (this._labListed38a.Tool_efficiency === false) {
          $('#lab38a').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed38a.Tool_efficiency === true) {
          $('#lab38a').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
  
        $("#lab38a").hover(()=>{
          if (this._labListed38a.Tool_Category === "Qualifications") {
              $('#lab38a').css("fill", "rgb(125, 109, 196)");
          }
          else if (this._labListed38a.Tool_Category === "Field Issues") {
              $('#lab38a').css("fill", "rgb(255, 193, 203)");
  
          }
          else if (this._labListed38a.Tool_Category === "Process") {
              $('#lab38a').css({fill: "#aee9ca"});
          }
      },
       ()=> {
          if (this._labListed38a.Tool_efficiency === false) {
              $('#lab38a').css({fill: "rgba(239, 9, 9, 0.78)"});
          }
          else if (this._labListed38a.Tool_efficiency === true) {
              $('#lab38a').css({fill: "rgba(140, 192, 19, 0.88)"});
          }
      });
  
      })
  
  
      this.http.get(this.apiRoot+'/api/tool_category_data/114/').subscribe(data =>{
          this._labListed38b = data as [any];
          if (this._labListed38b.Tool_efficiency === false) {
            $('#lab38b').css({fill: "rgba(239, 9, 9, 0.78)"});
          }
          else if (this._labListed38b.Tool_efficiency === true) {
            $('#lab38b').css({fill: "rgba(140, 192, 19, 0.88)"});
          }
    
          $("#lab38b").hover(()=>{
            if (this._labListed38b.Tool_Category === "Qualifications") {
                $('#lab38b').css("fill", "rgb(125, 109, 196)");
            }
            else if (this._labListed38b.Tool_Category === "Field Issues") {
                $('#lab38b').css("fill", "rgb(255, 193, 203)");
    
            }
            else if (this._labListed38b.Tool_Category === "Process") {
                $('#lab38b').css({fill: "#aee9ca"});
            }
        },
         ()=> {
            if (this._labListed38b.Tool_efficiency === false) {
                $('#lab38b').css({fill: "rgba(239, 9, 9, 0.78)"});
            }
            else if (this._labListed38b.Tool_efficiency === true) {
                $('#lab38b').css({fill: "rgba(140, 192, 19, 0.88)"});
            }
        });
    
        })


        this.http.get(this.apiRoot+'/api/tool_category_data/134/').subscribe(data =>{
            this._labListed38c = data as [any];
            if (this._labListed38c.Tool_efficiency === false) {
              $('#lab38c').css({fill: "rgba(239, 9, 9, 0.78)"});
            }
            else if (this._labListed38c.Tool_efficiency === true) {
              $('#lab38c').css({fill: "rgba(140, 192, 19, 0.88)"});
            }
      
            $("#lab38c").hover(()=>{
              if (this._labListed38c.Tool_Category === "Qualifications") {
                  $('#lab38c').css("fill", "rgb(125, 109, 196)");
              }
              else if (this._labListed38c.Tool_Category === "Field Issues") {
                  $('#lab38c').css("fill", "rgb(255, 193, 203)");
      
              }
              else if (this._labListed38c.Tool_Category === "Process") {
                  $('#lab38c').css({fill: "#aee9ca"});
              }
          },
           ()=> {
              if (this._labListed38c.Tool_efficiency === false) {
                  $('#lab38c').css({fill: "rgba(239, 9, 9, 0.78)"});
              }
              else if (this._labListed38c.Tool_efficiency === true) {
                  $('#lab38c').css({fill: "rgba(140, 192, 19, 0.88)"});
              }
          });
      
          })
    
        this.http.get(this.apiRoot+'/api/tool_category_data/124/').subscribe(data =>{
            this._labListed39 = data as [any];
            if (this._labListed39.Tool_efficiency === false) {
              $('#lab39').css({fill: "rgba(239, 9, 9, 0.78)"});
            }
            else if (this._labListed39.Tool_efficiency === true) {
              $('#lab39').css({fill: "rgba(140, 192, 19, 0.88)"});
            }
      
            $("#lab39").hover(()=>{
              if (this._labListed39.Tool_Category === "Qualifications") {
                  $('#lab39').css("fill", "rgb(125, 109, 196)");
              }
              else if (this._labListed39.Tool_Category === "Field Issues") {
                  $('#lab39').css("fill", "rgb(255, 193, 203)");
      
              }
              else if (this._labListed39.Tool_Category === "Process") {
                  $('#lab39').css({fill: "#aee9ca"});
              }
          },
           ()=> {
              if (this._labListed39.Tool_efficiency === false) {
                  $('#lab39').css({fill: "rgba(239, 9, 9, 0.78)"});
              }
              else if (this._labListed39.Tool_efficiency === true) {
                  $('#lab39').css({fill: "rgba(140, 192, 19, 0.88)"});
              }
          });
      
          })
      
        //   this.http.get(this.apiRoot+'/api/tool_category_data/124/').subscribe(data =>{
        //       this._labListed39b = data as [any];
        //       if (this._labListed39b.Tool_efficiency === false) {
        //         $('#lab39b').css({fill: "rgba(239, 9, 9, 0.78)"});
        //       }
        //       else if (this._labListed39b.Tool_efficiency === true) {
        //         $('#lab39b').css({fill: "rgba(140, 192, 19, 0.88)"});
        //       }
        
        //       $("#lab39b").hover(()=>{
        //         if (this._labListed39b.Tool_Category === "Qualifications") {
        //             $('#lab39b').css("fill", "rgb(125, 109, 196)");
        //         }
        //         else if (this._labListed39b.Tool_Category === "Field Issues") {
        //             $('#lab39b').css("fill", "rgb(255, 193, 203)");
        
        //         }
        //         else if (this._labListed39b.Tool_Category === "Process") {
        //             $('#lab39b').css({fill: "#aee9ca"});
        //         }
        //     },
        //      ()=> {
        //         if (this._labListed39b.Tool_efficiency === false) {
        //             $('#lab39b').css({fill: "rgba(239, 9, 9, 0.78)"});
        //         }
        //         else if (this._labListed39b.Tool_efficiency === true) {
        //             $('#lab39b').css({fill: "rgba(140, 192, 19, 0.88)"});
        //         }
        //     });
        
        //     })
        
      


//     // this.http.get(this.apiRoot+'/api/tool_category_data/44/').subscribe(data =>{
//     //   this._labListed39 = data as [any];
//     //   if (this._labListed39.Tool_efficiency === false) {
//     //     $('#lab39').css({fill: "rgba(239, 9, 9, 0.78)"});
//     //   }
//     //   else if (this._labListed39.Tool_efficiency === true) {
//     //     $('#lab39').css({fill: "rgba(140, 192, 19, 0.88)"});
//     //   }

//     //   $("#lab39").hover(()=>{
//     //     if (this._labListed39.Tool_Category === "Qualifications") {
//     //         $('#lab39').css("fill", "rgb(125, 109, 196)");
//     //     }
//     //     else if (this._labListed39.Tool_Category === "Field Issues") {
//     //         $('#lab39').css("fill", "rgb(255, 193, 203)");

//     //     }
//     //     else if (this._labListed39.Tool_Category === "Process") {
//     //         $('#lab39').css({fill: "#aee9ca"});
//     //     }
//     // },
//     //  ()=> {
//     //     if (this._labListed39.Tool_efficiency === false) {
//     //         $('#lab39').css({fill: "rgba(239, 9, 9, 0.78)"});
//     //     }
//     //     else if (this._labListed39.Tool_efficiency === true) {
//     //         $('#lab39').css({fill: "rgba(140, 192, 19, 0.88)"});
//     //     }
//     // });

//     // })


//     // this.http.get(this.apiRoot+'/api/tool_category_data/45/').subscribe(data =>{
//     //   this._labListed40 = data as [any];
//     //   if (this._labListed40.Tool_efficiency === false) {
//     //     $('#lab40').css({fill: "rgba(239, 9, 9, 0.78)"});
//     //   }
//     //   else if (this._labListed40.Tool_efficiency === true) {
//     //     $('#lab40').css({fill: "rgba(140, 192, 19, 0.88)"});
//     //   }

//     //   $("#lab40").hover(()=>{
//     //     if (this._labListed40.Tool_Category === "Qualifications") {
//     //         $('#lab40').css("fill", "rgb(125, 109, 196)");
//     //     }
//     //     else if (this._labListed40.Tool_Category === "Field Issues") {
//     //         $('#lab40').css("fill", "rgb(255, 193, 203)");

//     //     }
//     //     else if (this._labListed40.Tool_Category === "Process") {
//     //         $('#lab40').css({fill: "#aee9ca"});
//     //     }
//     // },
//     //  ()=> {
//     //     if (this._labListed40.Tool_efficiency === false) {
//     //         $('#lab40').css({fill: "rgba(239, 9, 9, 0.78)"});
//     //     }
//     //     else if (this._labListed40.Tool_efficiency === true) {
//     //         $('#lab40').css({fill: "rgba(140, 192, 19, 0.88)"});
//     //     }
//     // });

//     // })


    // this.http.get(this.apiRoot+'/api/tool_category_data/71/').subscribe(data =>{
    //     console.log(data);
    //     this._labListed40a = data as [any];
    //     if (this._labListed40a.Tool_efficiency === false) {
    //       $('#lab40a').css({fill: "rgba(239, 9, 9, 0.78)"});
    //     }
    //     else if (this._labListed40a.Tool_efficiency === true) {
    //       $('#lab40a').css({fill: "rgba(140, 192, 19, 0.88)"});
    //     }
  
    //     $("#lab40a").hover(()=>{
    //       if (this._labListed40a.Tool_Category === "Qualifications") {
    //           $('#lab40a').css("fill", "rgb(125, 109, 196)");
    //       }
    //       else if (this._labListed40a.Tool_Category === "Field Issues") {
    //           $('#lab40a').css("fill", "rgb(255, 193, 203)");
  
    //       }
    //       else if (this._labListed40a.Tool_Category === "Process") {
    //           $('#lab40a').css({fill: "#aee9ca"});
    //       }
    //   },
    //    ()=> {
    //       if (this._labListed40a.Tool_efficiency === false) {
    //           $('#lab40a').css({fill: "rgba(239, 9, 9, 0.78)"});
    //       }
    //       else if (this._labListed40a.Tool_efficiency === true) {
    //           $('#lab40a').css({fill: "rgba(140, 192, 19, 0.88)"});
    //       }
    //   });
  
    //   })


    //   this.http.get(this.apiRoot+'/api/tool_category_data/55/').subscribe(data =>{
    //     console.log(data);
    //     this._labListed40d = data as [any];
    //     if (this._labListed40d.Tool_efficiency === false) {
    //       $('#lab40d').css({fill: "rgba(239, 9, 9, 0.78)"});
    //     }
    //     else if (this._labListed40d.Tool_efficiency === true) {
    //       $('#lab40d').css({fill: "rgba(140, 192, 19, 0.88)"});
    //     }
    //     $("#lab40d").hover(()=>{
    //       if (this._labListed40d.Tool_Category === "Qualifications") {
    //           $('#lab40d').css("fill", "rgb(125, 109, 196)");
    //       }
    //       else if (this._labListed40d.Tool_Category === "Field Issues") {
    //           $('#lab40d').css("fill", "rgb(255, 193, 203)");
  
    //       }
    //       else if (this._labListed40d.Tool_Category === "Process") {
    //           $('#lab40d').css({fill: "#aee9ca"});
    //       }
    //   },
    //    ()=> {
    //       if (this._labListed40d.Tool_efficiency === false) {
    //           $('#lab40d').css({fill: "rgba(239, 9, 9, 0.78)"});
    //       }
    //       else if (this._labListed40d.Tool_efficiency === true) {
    //           $('#lab40d').css({fill: "rgba(140, 192, 19, 0.88)"});
    //       }
    //   });
  
    //   })
    
    // this.http.get(this.apiRoot+'/api/tool_category_data/45/').subscribe(data =>{
    //     this._labListed40a = data as [any];
    //     if (this._labListed40a.Tool_efficiency === false) {
    //       $('#lab40a').css({fill: "rgba(239, 9, 9, 0.78)"});
    //     }
    //     else if (this._labListed40a.Tool_efficiency === true) {
    //       $('#lab40a').css({fill: "rgba(140, 192, 19, 0.88)"});
    //     }
  
    //     $("#lab40a").hover(()=>{
    //       if (this._labListed40a.Tool_Category === "Qualifications") {
    //           $('#lab40a').css("fill", "rgb(125, 109, 196)");
    //       }
    //       else if (this._labListed40a.Tool_Category === "Field Issues") {
    //           $('#lab40a').css("fill", "rgb(255, 193, 203)");
  
    //       }
    //       else if (this._labListed40a.Tool_Category === "Process") {
    //           $('#lab40a').css({fill: "#aee9ca"});
    //       }
    //   },
    //    ()=> {
    //       if (this._labListed40a.Tool_efficiency === false) {
    //           $('#lab40a').css({fill: "rgba(239, 9, 9, 0.78)"});
    //       }
    //       else if (this._labListed40a.Tool_efficiency === true) {
    //           $('#lab40a').css({fill: "rgba(140, 192, 19, 0.88)"});
    //       }
    //   });
  
    //   })


      this.http.get(this.apiRoot+'/api/tool_category_data/119/').subscribe(data =>{
        this._labListed40b = data as [any];
        if (this._labListed40b.Tool_efficiency === false) {
          $('#lab40b').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed40b.Tool_efficiency === true) {
          $('#lab40b').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
  
        $("#lab40b").hover(()=>{
          if (this._labListed40b.Tool_Category === "Qualifications") {
              $('#lab40b').css("fill", "rgb(125, 109, 196)");
          }
          else if (this._labListed40b.Tool_Category === "Field Issues") {
              $('#lab40b').css("fill", "rgb(255, 193, 203)");
  
          }
          else if (this._labListed40b.Tool_Category === "Process") {
              $('#lab40b').css({fill: "#aee9ca"});
          }
      },
       ()=> {
          if (this._labListed40b.Tool_efficiency === false) {
              $('#lab40b').css({fill: "rgba(239, 9, 9, 0.78)"});
          }
          else if (this._labListed40b.Tool_efficiency === true) {
              $('#lab40b').css({fill: "rgba(140, 192, 19, 0.88)"});
          }
      });
  
       })



    this.http.get(this.apiRoot+'/api/tool_category_data/117/').subscribe(data =>{
      this._labListed41a = data as [any];
      if (this._labListed41a.Tool_efficiency === false) {
        $('#lab41a').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed41a.Tool_efficiency === true) {
        $('#lab41a').css({fill: "rgba(140, 192, 19, 0.88)"});
      }

      $("#lab41a").hover(()=>{
        if (this._labListed41a.Tool_Category === "Qualifications") {
            $('#lab41a').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed41a.Tool_Category === "Field Issues") {
            $('#lab41a').css("fill", "rgb(255, 193, 203)");

        }
        else if (this._labListed41a.Tool_Category === "Process") {
            $('#lab41a').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed41a.Tool_efficiency === false) {
            $('#lab41a').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed41a.Tool_efficiency === true) {
            $('#lab41a').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });
    })

    // this.http.get(this.apiRoot+'/api/tool_category_data/137/').subscribe(data =>{
    //     this._labListed41b = data as [any];
    //     if (this._labListed41b.Tool_efficiency === false) {
    //       $('#lab41b').css({fill: "rgba(239, 9, 9, 0.78)"});
    //     }
    //     else if (this._labListed41b.Tool_efficiency === true) {
    //       $('#lab41b').css({fill: "rgba(140, 192, 19, 0.88)"});
    //     }
  
    //     $("#lab41b").hover(()=>{
    //       if (this._labListed41b.Tool_Category === "Qualifications") {
    //           $('#lab41b').css("fill", "rgb(125, 109, 196)");
    //       }
    //       else if (this._labListed41b.Tool_Category === "Field Issues") {
    //           $('#lab41b').css("fill", "rgb(255, 193, 203)");
  
    //       }
    //       else if (this._labListed41b.Tool_Category === "Process") {
    //           $('#lab41b').css({fill: "#aee9ca"});
    //       }
    //   },
    //    ()=> {
    //       if (this._labListed41b.Tool_efficiency === false) {
    //           $('#lab41b').css({fill: "rgba(239, 9, 9, 0.78)"});
    //       }
    //       else if (this._labListed41b.Tool_efficiency === true) {
    //           $('#lab41b').css({fill: "rgba(140, 192, 19, 0.88)"});
    //       }
    //   });
    //    })

    //    this.http.get(this.apiRoot+'/api/tool_category_data/138/').subscribe(data =>{
    //     this._labListed41c = data as [any];
    //     if (this._labListed41c.Tool_efficiency === false) {
    //       $('#lab41c').css({fill: "rgba(239, 9, 9, 0.78)"});
    //     }
    //     else if (this._labListed41c.Tool_efficiency === true) {
    //       $('#lab41c').css({fill: "rgba(140, 192, 19, 0.88)"});
    //     }
  
    //     $("#lab41c").hover(()=>{
    //       if (this._labListed41c.Tool_Category === "Qualifications") {
    //           $('#lab41c').css("fill", "rgb(125, 109, 196)");
    //       }
    //       else if (this._labListed41c.Tool_Category === "Field Issues") {
    //           $('#lab41c').css("fill", "rgb(255, 193, 203)");
  
    //       }
    //       else if (this._labListed41c.Tool_Category === "Process") {
    //           $('#lab41c').css({fill: "#aee9ca"});
    //       }
    //   },
    //    ()=> {
    //       if (this._labListed41c.Tool_efficiency === false) {
    //           $('#lab41c').css({fill: "rgba(239, 9, 9, 0.78)"});
    //       }
    //       else if (this._labListed41c.Tool_efficiency === true) {
    //           $('#lab41c').css({fill: "rgba(140, 192, 19, 0.88)"});
    //       }
    //   });
    //    })

       this.http.get(this.apiRoot+'/api/tool_category_data/146/').subscribe(data =>{
        this._labListed41d = data as [any];
        if (this._labListed41d.Tool_efficiency === false) {
          $('#lab41d').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed41d.Tool_efficiency === true) {
          $('#lab41d').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
  
        $("#lab41d").hover(()=>{
          if (this._labListed41d.Tool_Category === "Qualifications") {
              $('#lab41d').css("fill", "rgb(125, 109, 196)");
          }
          else if (this._labListed41d.Tool_Category === "Field Issues") {
              $('#lab41d').css("fill", "rgb(255, 193, 203)");
  
          }
          else if (this._labListed41d.Tool_Category === "Process") {
              $('#lab41d').css({fill: "#aee9ca"});
          }
      },
       ()=> {
          if (this._labListed41d.Tool_efficiency === false) {
              $('#lab41d').css({fill: "rgba(239, 9, 9, 0.78)"});
          }
          else if (this._labListed41d.Tool_efficiency === true) {
              $('#lab41d').css({fill: "rgba(140, 192, 19, 0.88)"});
          }
      });
       })


    this.http.get(this.apiRoot+'/api/tool_category_data/85/').subscribe(data =>{
      this._labListed42 = data as [any];
      if (this._labListed42.Tool_efficiency === false) {
        $('#lab42').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed42.Tool_efficiency === true) {
        $('#lab42').css({fill: "rgba(140, 192, 19, 0.88)"});
      }

      $("#lab42").hover(()=>{
        if (this._labListed42.Tool_Category === "Qualifications") {
            $('#lab42').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed42.Tool_Category === "Field Issues") {
            $('#lab42').css("fill", "rgb(255, 193, 203)");

        }
        else if (this._labListed42.Tool_Category === "Process") {
            $('#lab42').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed42.Tool_efficiency === false) {
            $('#lab42').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed42.Tool_efficiency === true) {
            $('#lab42').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });

    })


    this.http.get(this.apiRoot+'/api/tool_category_data/111/').subscribe(data =>{
      this._labListed43 = data as [any];
      if (this._labListed43.Tool_efficiency === false) {
        $('#lab43').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed43.Tool_efficiency === true) {
        $('#lab43').css({fill: "rgba(140, 192, 19, 0.88)"});
      }

      $("#lab43").hover(()=>{
        if (this._labListed43.Tool_Category === "Qualifications") {
            $('#lab43').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed43.Tool_Category === "Field Issues") {
            $('#lab43').css("fill", "rgb(255, 193, 203)");

        }
        else if (this._labListed43.Tool_Category === "Process") {
            $('#lab43').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed43.Tool_efficiency === false) {
            $('#lab43').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed43.Tool_efficiency === true) {
            $('#lab43').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });

    })


    this.labData44 = this.http.get(this.apiRoot+'/api/tool_category_data/130/').subscribe(data =>{
      this._labListed44 = data as [any];
      if (this._labListed44.Tool_efficiency === false) {
        $('#lab44').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed44.Tool_efficiency === true) {
        $('#lab44').css({fill: "rgba(140, 192, 19, 0.88)"});
      }

      $("#lab44").hover(()=>{
        if (this._labListed44.Tool_Category === "Qualifications") {
            $('#lab44').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed44.Tool_Category === "Field Issues") {
            $('#lab44').css("fill", "rgb(255, 193, 203)");

        }
        else if (this._labListed44.Tool_Category === "Process") {
            $('#lab44').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed44.Tool_efficiency === false) {
            $('#lab44').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed44.Tool_efficiency === true) {
            $('#lab44').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });

    })


    this.http.get(this.apiRoot+'/api/tool_category_data/128/').subscribe(data =>{
      this._labListed45 = data as [any];
      if (this._labListed45.Tool_efficiency === false) {
        $('#lab45').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed45.Tool_efficiency === true) {
        $('#lab45').css({fill: "rgba(140, 192, 19, 0.88)"});
      }

      $("#lab45").hover(()=>{
        if (this._labListed45.Tool_Category === "Qualifications") {
            $('#lab45').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed45.Tool_Category === "Field Issues") {
            $('#lab45').css("fill", "rgb(255, 193, 203)");

        }
        else if (this._labListed45.Tool_Category === "Process") {
            $('#lab45').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed45.Tool_efficiency === false) {
            $('#lab45').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed45.Tool_efficiency === true) {
            $('#lab45').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });

    })

//  this.http.get(this.apiRoot+'/api/tool_category_data/82/').subscribe(data =>{
//         console.log(data);
//         this._labListed44 = data as [any];
//         if (this._labListed44.Tool_efficiency === false) {
//           $('#lab44').css({fill: "rgba(239, 9, 9, 0.78)"});
//         }
//         else if (this._labListed44.Tool_efficiency === true) {
//           $('#lab44').css({fill: "rgba(140, 192, 19, 0.88)"});
//         }
  
//         $("#lab44").hover(()=>{
//           if (this._labListed44.Tool_Category === "Qualifications") {
//               $('#lab44').css("fill", "rgb(125, 109, 196)");
//           }
//           else if (this._labListed44.Tool_Category === "Field Issues") {
//               $('#lab44').css("fill", "rgb(255, 193, 203)");
  
//           }
//           else if (this._labListed44.Tool_Category === "Process") {
//               $('#lab44').css({fill: "#aee9ca"});
//           }
//       },
//        ()=> {
//           if (this._labListed44.Tool_efficiency === false) {
//               $('#lab44').css({fill: "rgba(239, 9, 9, 0.78)"});
//           }
//           else if (this._labListed44.Tool_efficiency === true) {
//               $('#lab44').css({fill: "rgba(140, 192, 19, 0.88)"});
//           }
//       });
  
//       })
  
  
//       this.http.get(this.apiRoot+'/api/tool_category_data/84/').subscribe(data =>{
//         console.log(data);
//         this._labListed45 = data as [any];
//         if (this._labListed45.Tool_efficiency === false) {
//           $('#lab45').css({fill: "rgba(239, 9, 9, 0.78)"});
//         }
//         else if (this._labListed45.Tool_efficiency === true) {
//           $('#lab45').css({fill: "rgba(140, 192, 19, 0.88)"});
//         }
  
//         $("#lab45").hover(()=>{
//           if (this._labListed45.Tool_Category === "Qualifications") {
//               $('#lab45').css("fill", "rgb(125, 109, 196)");
//           }
//           else if (this._labListed45.Tool_Category === "Field Issues") {
//               $('#lab45').css("fill", "rgb(255, 193, 203)");
  
//           }
//           else if (this._labListed45.Tool_Category === "Process") {
//               $('#lab45').css({fill: "#aee9ca"});
//           }
//       },
//        ()=> {
//           if (this._labListed45.Tool_efficiency === false) {
//               $('#lab45').css({fill: "rgba(239, 9, 9, 0.78)"});
//           }
//           else if (this._labListed45.Tool_efficiency === true) {
//               $('#lab45').css({fill: "rgba(140, 192, 19, 0.88)"});
//           }
//       });
  
//       })
  


    this.http.get(this.apiRoot+'/api/tool_category_data/162/').subscribe(data =>{
        this._labListed46 = data as [any];
        if (this._labListed46.Tool_efficiency === false) {
          $('#lab46').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed46.Tool_efficiency === true) {
          $('#lab46').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
  
        $("#lab46").hover(()=>{
          if (this._labListed46.Tool_Category === "Qualifications") {
              $('#lab46').css("fill", "rgb(125, 109, 196)");
          }
          else if (this._labListed46.Tool_Category === "Field Issues") {
              $('#lab46').css("fill", "rgb(255, 193, 203)");
  
          }
          else if (this._labListed46.Tool_Category === "Process") {
              $('#lab46').css({fill: "#aee9ca"});
          }
      },
       ()=> {
          if (this._labListed46.Tool_efficiency === false) {
              $('#lab46').css({fill: "rgba(239, 9, 9, 0.78)"});
          }
          else if (this._labListed46.Tool_efficiency === true) {
              $('#lab46').css({fill: "rgba(140, 192, 19, 0.88)"});
          }
      });
  
      })
  
      this.http.get(this.apiRoot+'/api/tool_category_data/131/').subscribe(data =>{
        this._labListed47 = data as [any];
        if (this._labListed47.Tool_efficiency === false) {
          $('#lab47').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed47.Tool_efficiency === true) {
          $('#lab47').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
  
        $("#lab47").hover(()=>{
          if (this._labListed47.Tool_Category === "Qualifications") {
              $('#lab47').css("fill", "rgb(125, 109, 196)");
          }
          else if (this._labListed47.Tool_Category === "Field Issues") {
              $('#lab47').css("fill", "rgb(255, 193, 203)");
  
          }
          else if (this._labListed47.Tool_Category === "Process") {
              $('#lab47').css({fill: "#aee9ca"});
          }
      },
       ()=> {
          if (this._labListed47.Tool_efficiency === false) {
              $('#lab47').css({fill: "rgba(239, 9, 9, 0.78)"});
          }
          else if (this._labListed47.Tool_efficiency === true) {
              $('#lab47').css({fill: "rgba(140, 192, 19, 0.88)"});
          }
      });
  
      })

      this.http.get(this.apiRoot+'/api/tool_category_data/131/').subscribe(data =>{
        this._labListed49 = data as [any];
        if (this._labListed49.Tool_efficiency === false) {
          $('#lab49').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed49.Tool_efficiency === true) {
          $('#lab49').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
  
        $("#lab49").hover(()=>{
          if (this._labListed49.Tool_Category === "Qualifications") {
              $('#lab49').css("fill", "rgb(125, 109, 196)");
          }
          else if (this._labListed49.Tool_Category === "Field Issues") {
              $('#lab49').css("fill", "rgb(255, 193, 203)");
  
          }
          else if (this._labListed49.Tool_Category === "Process") {
              $('#lab49').css({fill: "#aee9ca"});
          }
      },
       ()=> {
          if (this._labListed49.Tool_efficiency === false) {
              $('#lab49').css({fill: "rgba(239, 9, 9, 0.78)"});
          }
          else if (this._labListed49.Tool_efficiency === true) {
              $('#lab49').css({fill: "rgba(140, 192, 19, 0.88)"});
          }
      });
      })
  
      this.http.get(this.apiRoot+'/api/tool_category_data/147/').subscribe(data =>{
        this._labListed50 = data as [any];
        if (this._labListed50.Tool_efficiency === false) {
          $('#lab50').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed50.Tool_efficiency === true) {
          $('#lab50').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
  
        $("#lab50").hover(()=>{
          if (this._labListed50.Tool_Category === "Qualifications") {
              $('#lab50').css("fill", "rgb(125, 109, 196)");
          }
          else if (this._labListed50.Tool_Category === "Field Issues") {
              $('#lab50').css("fill", "rgb(255, 193, 203)");
  
          }
          else if (this._labListed50.Tool_Category === "Process") {
              $('#lab50').css({fill: "#aee9ca"});
          }
      },
       ()=> {
          if (this._labListed50.Tool_efficiency === false) {
              $('#lab50').css({fill: "rgba(239, 9, 9, 0.78)"});
          }
          else if (this._labListed50.Tool_efficiency === true) {
              $('#lab50').css({fill: "rgba(140, 192, 19, 0.88)"});
          }
      });
      })
    
      this.http.get(this.apiRoot+'/api/tool_category_data/131/').subscribe(data =>{
        this._labListed48 = data as [any];
        if (this._labListed48.Tool_efficiency === false) {
          $('#lab48').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed48.Tool_efficiency === true) {
          $('#lab48').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
  
        $("#lab48").hover(()=>{
          if (this._labListed48.Tool_Category === "Qualifications") {
              $('#lab48').css("fill", "rgb(125, 109, 196)");
          }
          else if (this._labListed48.Tool_Category === "Field Issues") {
              $('#lab48').css("fill", "rgb(255, 193, 203)");
  
          }
          else if (this._labListed48.Tool_Category === "Process") {
              $('#lab48').css({fill: "#aee9ca"});
          }
      },
       ()=> {
          if (this._labListed48.Tool_efficiency === false) {
              $('#lab48').css({fill: "rgba(239, 9, 9, 0.78)"});
          }
          else if (this._labListed48.Tool_efficiency === true) {
              $('#lab48').css({fill: "rgba(140, 192, 19, 0.88)"});
          }
      });
  
    })

    this.http.get(this.apiRoot+'/api/tool_category_data/131/').subscribe(data =>{
        this._labListed51 = data as [any];
        if (this._labListed51.Tool_efficiency === false) {
          $('#lab51').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed51.Tool_efficiency === true) {
          $('#lab51').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
  
        $("#lab51").hover(()=>{
          if (this._labListed51.Tool_Category === "Qualifications") {
              $('#lab51').css("fill", "rgb(125, 109, 196)");
          }
          else if (this._labListed51.Tool_Category === "Field Issues") {
              $('#lab51').css("fill", "rgb(255, 193, 203)");
  
          }
          else if (this._labListed51.Tool_Category === "Process") {
              $('#lab51').css({fill: "#aee9ca"});
          }
      },
       ()=> {
          if (this._labListed51.Tool_efficiency === false) {
              $('#lab51').css({fill: "rgba(239, 9, 9, 0.78)"});
          }
          else if (this._labListed51.Tool_efficiency === true) {
              $('#lab51').css({fill: "rgba(140, 192, 19, 0.88)"});
          }
      });
  
    })

    this.http.get(this.apiRoot+'/api/tool_category_data/131/').subscribe(data =>{
        this._labListed52 = data as [any];
        if (this._labListed52.Tool_efficiency === false) {
          $('#lab52').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed52.Tool_efficiency === true) {
          $('#lab52').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
  
        $("#lab52").hover(()=>{
          if (this._labListed52.Tool_Category === "Qualifications") {
              $('#lab52').css("fill", "rgb(125, 109, 196)");
          }
          else if (this._labListed52.Tool_Category === "Field Issues") {
              $('#lab52').css("fill", "rgb(255, 193, 203)");
  
          }
          else if (this._labListed52.Tool_Category === "Process") {
              $('#lab52').css({fill: "#aee9ca"});
          }
      },
       ()=> {
          if (this._labListed52.Tool_efficiency === false) {
              $('#lab52').css({fill: "rgba(239, 9, 9, 0.78)"});
          }
          else if (this._labListed52.Tool_efficiency === true) {
              $('#lab52').css({fill: "rgba(140, 192, 19, 0.88)"});
          }
      });
  
    })

    this.http.get(this.apiRoot+'/api/tool_category_data/131/').subscribe(data =>{
        this._labListed53 = data as [any];
        if (this._labListed53.Tool_efficiency === false) {
          $('#lab53').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed53.Tool_efficiency === true) {
          $('#lab53').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
  
        $("#lab53").hover(()=>{
          if (this._labListed53.Tool_Category === "Qualifications") {
              $('#lab53').css("fill", "rgb(125, 109, 196)");
          }
          else if (this._labListed53.Tool_Category === "Field Issues") {
              $('#lab53').css("fill", "rgb(255, 193, 203)");
  
          }
          else if (this._labListed53.Tool_Category === "Process") {
              $('#lab53').css({fill: "#aee9ca"});
          }
      },
       ()=> {
          if (this._labListed53.Tool_efficiency === false) {
              $('#lab53').css({fill: "rgba(239, 9, 9, 0.78)"});
          }
          else if (this._labListed53.Tool_efficiency === true) {
              $('#lab53').css({fill: "rgba(140, 192, 19, 0.88)"});
          }
      });
  
    })

    this.http.get(this.apiRoot+'/api/tool_category_data/131/').subscribe(data =>{
        this._labListed54 = data as [any];
        if (this._labListed54.Tool_efficiency === false) {
          $('#lab54').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed54.Tool_efficiency === true) {
          $('#lab54').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
  
        $("#lab54").hover(()=>{
          if (this._labListed54.Tool_Category === "Qualifications") {
              $('#lab54').css("fill", "rgb(125, 109, 196)");
          }
          else if (this._labListed54.Tool_Category === "Field Issues") {
              $('#lab54').css("fill", "rgb(255, 193, 203)");
  
          }
          else if (this._labListed54.Tool_Category === "Process") {
              $('#lab54').css({fill: "#aee9ca"});
          }
      },
       ()=> {
          if (this._labListed54.Tool_efficiency === false) {
              $('#lab54').css({fill: "rgba(239, 9, 9, 0.78)"});
          }
          else if (this._labListed54.Tool_efficiency === true) {
              $('#lab54').css({fill: "rgba(140, 192, 19, 0.88)"});
          }
      });
  
    })

    this.http.get(this.apiRoot+'/api/tool_category_data/131/').subscribe(data =>{
        this._labListed55 = data as [any];
        if (this._labListed55.Tool_efficiency === false) {
          $('#lab55').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed55.Tool_efficiency === true) {
          $('#lab55').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
  
        $("#lab55").hover(()=>{
          if (this._labListed55.Tool_Category === "Qualifications") {
              $('#lab55').css("fill", "rgb(125, 109, 196)");
          }
          else if (this._labListed55.Tool_Category === "Field Issues") {
              $('#lab55').css("fill", "rgb(255, 193, 203)");
  
          }
          else if (this._labListed55.Tool_Category === "Process") {
              $('#lab55').css({fill: "#aee9ca"});
          }
      },
       ()=> {
          if (this._labListed55.Tool_efficiency === false) {
              $('#lab55').css({fill: "rgba(239, 9, 9, 0.78)"});
          }
          else if (this._labListed55.Tool_efficiency === true) {
              $('#lab55').css({fill: "rgba(140, 192, 19, 0.88)"});
          }
      });
  
    })

    this.http.get(this.apiRoot+'/api/tool_category_data/131/').subscribe(data =>{
        this._labListed56 = data as [any];
        if (this._labListed56.Tool_efficiency === false) {
          $('#lab56').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed56.Tool_efficiency === true) {
          $('#lab56').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
  
        $("#lab56").hover(()=>{
          if (this._labListed56.Tool_Category === "Qualifications") {
              $('#lab56').css("fill", "rgb(125, 109, 196)");
          }
          else if (this._labListed56.Tool_Category === "Field Issues") {
              $('#lab56').css("fill", "rgb(256, 193, 203)");
  
          }
          else if (this._labListed56.Tool_Category === "Process") {
              $('#lab56').css({fill: "#aee9ca"});
          }
      },
       ()=> {
          if (this._labListed56.Tool_efficiency === false) {
              $('#lab56').css({fill: "rgba(239, 9, 9, 0.78)"});
          }
          else if (this._labListed56.Tool_efficiency === true) {
              $('#lab56').css({fill: "rgba(140, 192, 19, 0.88)"});
          }
      });
  
    })

    this.http.get(this.apiRoot+'/api/tool_category_data/131/').subscribe(data =>{
        this._labListed57 = data as [any];
        if (this._labListed57.Tool_efficiency === false) {
          $('#lab57').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed57.Tool_efficiency === true) {
          $('#lab57').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
  
        $("#lab57").hover(()=>{
          if (this._labListed57.Tool_Category === "Qualifications") {
              $('#lab57').css("fill", "rgb(125, 109, 196)");
          }
          else if (this._labListed57.Tool_Category === "Field Issues") {
              $('#lab57').css("fill", "rgb(257, 193, 203)");
  
          }
          else if (this._labListed57.Tool_Category === "Process") {
              $('#lab57').css({fill: "#aee9ca"});
          }
      },
       ()=> {
          if (this._labListed57.Tool_efficiency === false) {
              $('#lab57').css({fill: "rgba(239, 9, 9, 0.78)"});
          }
          else if (this._labListed57.Tool_efficiency === true) {
              $('#lab57').css({fill: "rgba(140, 192, 19, 0.88)"});
          }
      });
  
    })

    this.http.get(this.apiRoot+'/api/tool_category_data/131/').subscribe(data =>{
        this._labListed58 = data as [any];
        if (this._labListed58.Tool_efficiency === false) {
          $('#lab58').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed58.Tool_efficiency === true) {
          $('#lab58').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
  
        $("#lab58").hover(()=>{
          if (this._labListed58.Tool_Category === "Qualifications") {
              $('#lab58').css("fill", "rgb(125, 109, 196)");
          }
          else if (this._labListed58.Tool_Category === "Field Issues") {
              $('#lab58').css("fill", "rgb(258, 193, 203)");
  
          }
          else if (this._labListed58.Tool_Category === "Process") {
              $('#lab58').css({fill: "#aee9ca"});
          }
      },
       ()=> {
          if (this._labListed58.Tool_efficiency === false) {
              $('#lab58').css({fill: "rgba(239, 9, 9, 0.78)"});
          }
          else if (this._labListed58.Tool_efficiency === true) {
              $('#lab58').css({fill: "rgba(140, 192, 19, 0.88)"});
          }
      });
  
    })

    this.http.get(this.apiRoot+'/api/tool_category_data/131/').subscribe(data =>{
        this._labListed59 = data as [any];
        if (this._labListed59.Tool_efficiency === false) {
          $('#lab59').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed59.Tool_efficiency === true) {
          $('#lab59').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
  
        $("#lab59").hover(()=>{
          if (this._labListed59.Tool_Category === "Qualifications") {
              $('#lab59').css("fill", "rgb(125, 109, 196)");
          }
          else if (this._labListed59.Tool_Category === "Field Issues") {
              $('#lab59').css("fill", "rgb(259, 193, 203)");
  
          }
          else if (this._labListed59.Tool_Category === "Process") {
              $('#lab59').css({fill: "#aee9ca"});
          }
      },
       ()=> {
          if (this._labListed59.Tool_efficiency === false) {
              $('#lab59').css({fill: "rgba(239, 9, 9, 0.78)"});
          }
          else if (this._labListed59.Tool_efficiency === true) {
              $('#lab59').css({fill: "rgba(140, 192, 19, 0.88)"});
          }
      });
  
    })

    this.http.get(this.apiRoot+'/api/tool_category_data/131/').subscribe(data =>{
        this._labListed60 = data as [any];
        if (this._labListed60.Tool_efficiency === false) {
          $('#lab60').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed60.Tool_efficiency === true) {
          $('#lab60').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
  
        $("#lab60").hover(()=>{
          if (this._labListed60.Tool_Category === "Qualifications") {
              $('#lab60').css("fill", "rgb(125, 109, 196)");
          }
          else if (this._labListed60.Tool_Category === "Field Issues") {
              $('#lab60').css("fill", "rgb(260, 193, 203)");
  
          }
          else if (this._labListed60.Tool_Category === "Process") {
              $('#lab60').css({fill: "#aee9ca"});
          }
      },
       ()=> {
          if (this._labListed60.Tool_efficiency === false) {
              $('#lab60').css({fill: "rgba(239, 9, 9, 0.78)"});
          }
          else if (this._labListed60.Tool_efficiency === true) {
              $('#lab60').css({fill: "rgba(140, 192, 19, 0.88)"});
          }
      });
  
    })

    this.http.get(this.apiRoot+'/api/tool_category_data/131/').subscribe(data =>{
        this._labListed61 = data as [any];
        if (this._labListed61.Tool_efficiency === false) {
          $('#lab61').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed61.Tool_efficiency === true) {
          $('#lab61').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
  
        $("#lab61").hover(()=>{
          if (this._labListed61.Tool_Category === "Qualifications") {
              $('#lab61').css("fill", "rgb(125, 109, 196)");
          }
          else if (this._labListed61.Tool_Category === "Field Issues") {
              $('#lab61').css("fill", "rgb(261, 193, 203)");
  
          }
          else if (this._labListed61.Tool_Category === "Process") {
              $('#lab61').css({fill: "#aee9ca"});
          }
      },
       ()=> {
          if (this._labListed61.Tool_efficiency === false) {
              $('#lab61').css({fill: "rgba(239, 9, 9, 0.78)"});
          }
          else if (this._labListed61.Tool_efficiency === true) {
              $('#lab61').css({fill: "rgba(140, 192, 19, 0.88)"});
          }
      });
  
    })

    this.http.get(this.apiRoot+'/api/tool_category_data/131/').subscribe(data =>{
        this._labListed62 = data as [any];
        if (this._labListed62.Tool_efficiency === false) {
          $('#lab62').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed62.Tool_efficiency === true) {
          $('#lab62').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
  
        $("#lab62").hover(()=>{
          if (this._labListed62.Tool_Category === "Qualifications") {
              $('#lab62').css("fill", "rgb(125, 109, 196)");
          }
          else if (this._labListed62.Tool_Category === "Field Issues") {
              $('#lab62').css("fill", "rgb(262, 193, 203)");
  
          }
          else if (this._labListed62.Tool_Category === "Process") {
              $('#lab62').css({fill: "#aee9ca"});
          }
      },
       ()=> {
          if (this._labListed62.Tool_efficiency === false) {
              $('#lab62').css({fill: "rgba(239, 9, 9, 0.78)"});
          }
          else if (this._labListed62.Tool_efficiency === true) {
              $('#lab62').css({fill: "rgba(140, 192, 19, 0.88)"});
          }
      });
  
    })

    this.http.get(this.apiRoot+'/api/tool_category_data/131/').subscribe(data =>{
        this._labListed63 = data as [any];
        if (this._labListed63.Tool_efficiency === false) {
          $('#lab63').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed63.Tool_efficiency === true) {
          $('#lab63').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
  
        $("#lab63").hover(()=>{
          if (this._labListed63.Tool_Category === "Qualifications") {
              $('#lab63').css("fill", "rgb(125, 109, 196)");
          }
          else if (this._labListed63.Tool_Category === "Field Issues") {
              $('#lab63').css("fill", "rgb(263, 193, 203)");
  
          }
          else if (this._labListed63.Tool_Category === "Process") {
              $('#lab63').css({fill: "#aee9ca"});
          }
      },
       ()=> {
          if (this._labListed63.Tool_efficiency === false) {
              $('#lab63').css({fill: "rgba(239, 9, 9, 0.78)"});
          }
          else if (this._labListed63.Tool_efficiency === true) {
              $('#lab63').css({fill: "rgba(140, 192, 19, 0.88)"});
          }
      });
  
    })

    this.http.get(this.apiRoot+'/api/tool_category_data/131/').subscribe(data =>{
        this._labListed64 = data as [any];
        if (this._labListed64.Tool_efficiency === false) {
          $('#lab64').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed64.Tool_efficiency === true) {
          $('#lab64').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
  
        $("#lab64").hover(()=>{
          if (this._labListed64.Tool_Category === "Qualifications") {
              $('#lab64').css("fill", "rgb(125, 109, 196)");
          }
          else if (this._labListed64.Tool_Category === "Field Issues") {
              $('#lab64').css("fill", "rgb(264, 193, 203)");
  
          }
          else if (this._labListed64.Tool_Category === "Process") {
              $('#lab64').css({fill: "#aee9ca"});
          }
      },
       ()=> {
          if (this._labListed64.Tool_efficiency === false) {
              $('#lab64').css({fill: "rgba(239, 9, 9, 0.78)"});
          }
          else if (this._labListed64.Tool_efficiency === true) {
              $('#lab64').css({fill: "rgba(140, 192, 19, 0.88)"});
          }
      });
  
    })

    this.http.get(this.apiRoot+'/api/tool_category_data/131/').subscribe(data =>{
        this._labListed65 = data as [any];
        if (this._labListed65.Tool_efficiency === false) {
          $('#lab65').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed65.Tool_efficiency === true) {
          $('#lab65').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
  
        $("#lab65").hover(()=>{
          if (this._labListed65.Tool_Category === "Qualifications") {
              $('#lab65').css("fill", "rgb(125, 109, 196)");
          }
          else if (this._labListed65.Tool_Category === "Field Issues") {
              $('#lab65').css("fill", "rgb(265, 193, 203)");
  
          }
          else if (this._labListed65.Tool_Category === "Process") {
              $('#lab65').css({fill: "#aee9ca"});
          }
      },
       ()=> {
          if (this._labListed65.Tool_efficiency === false) {
              $('#lab65').css({fill: "rgba(239, 9, 9, 0.78)"});
          }
          else if (this._labListed65.Tool_efficiency === true) {
              $('#lab65').css({fill: "rgba(140, 192, 19, 0.88)"});
          }
      });
  
    })

    this.http.get(this.apiRoot+'/api/tool_category_data/131/').subscribe(data =>{
        this._labListed66 = data as [any];
        if (this._labListed66.Tool_efficiency === false) {
          $('#lab66').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed66.Tool_efficiency === true) {
          $('#lab66').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
  
        $("#lab66").hover(()=>{
          if (this._labListed66.Tool_Category === "Qualifications") {
              $('#lab66').css("fill", "rgb(125, 109, 196)");
          }
          else if (this._labListed66.Tool_Category === "Field Issues") {
              $('#lab66').css("fill", "rgb(266, 193, 203)");
  
          }
          else if (this._labListed66.Tool_Category === "Process") {
              $('#lab66').css({fill: "#aee9ca"});
          }
      },
       ()=> {
          if (this._labListed66.Tool_efficiency === false) {
              $('#lab66').css({fill: "rgba(239, 9, 9, 0.78)"});
          }
          else if (this._labListed66.Tool_efficiency === true) {
              $('#lab66').css({fill: "rgba(140, 192, 19, 0.88)"});
          }
      });
  
    })

    this.http.get(this.apiRoot+'/api/tool_category_data/131/').subscribe(data =>{
        this._labListed67 = data as [any];
        if (this._labListed67.Tool_efficiency === false) {
          $('#lab67').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed67.Tool_efficiency === true) {
          $('#lab67').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
  
        $("#lab67").hover(()=>{
          if (this._labListed67.Tool_Category === "Qualifications") {
              $('#lab67').css("fill", "rgb(125, 109, 196)");
          }
          else if (this._labListed67.Tool_Category === "Field Issues") {
              $('#lab67').css("fill", "rgb(267, 193, 203)");
  
          }
          else if (this._labListed67.Tool_Category === "Process") {
              $('#lab67').css({fill: "#aee9ca"});
          }
      },
       ()=> {
          if (this._labListed67.Tool_efficiency === false) {
              $('#lab67').css({fill: "rgba(239, 9, 9, 0.78)"});
          }
          else if (this._labListed67.Tool_efficiency === true) {
              $('#lab67').css({fill: "rgba(140, 192, 19, 0.88)"});
          }
      });
  
    })


    // this._cumulativeLab = '';
    // this._cumulativeUtilization = this.http.get('assets/json/labUtilization.json').subscribe(data=>{
    //   this._cumulativeLab = data;
    // })

    this._cumulativeLab = '';
    this._data1.dashboardCumulative().subscribe(data=>{
        this._cumulativeLab = data;
    })

    // this._quaterLab = '';
    // this._quaterUtilization = this.http.get('assets/json/quaterlyLab.json').subscribe(data=>{
    //   this._quaterLab = data;
    // })

    this._quaterLab = '';
    this._data1.dashboardQuaterly().subscribe(data=>{
        this._quaterLab = data;
    })


        
  }

  ngOnDestroy(){
      
  }






}