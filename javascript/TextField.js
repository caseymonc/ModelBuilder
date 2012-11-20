// JavaScript Document
function $$hint(f) { 
      if(f.length) { 
            var dval = f.attr('title'); 
            if(dval) { 
                  if(!f.val().length) { 
                        f.val(dval); 
                  } 
                  f.focus(function() { 
                        if(f.val() == dval) { 
                              f.val(''); 
                        } 
                  }).blur(function() { 
                        if(!f.val().length) { 
                              f.val(dval); 
                        } 
                  }); 
            } 
      } 
}