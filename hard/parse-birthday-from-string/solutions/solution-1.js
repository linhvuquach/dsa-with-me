export function parseBirthday(remarkString) {
    //   var regex = /year(?<year>\d{4})|month(?<month>\d{1,2})|day(?<day>\d{1,2})/gm;
      var regex = /year(?<year>\d{4})|month(?<month>\d{1,2})|day(?<day>\d{1,2})/gi;
      let m;
      
      var formattedDate = {
        year: '',
        month: '',
        day: '',
      };
      
      while ((m = regex.exec(remarkString)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }
    
        if(m.groups.year && !formattedDate.year) {
            formattedDate.year = m.groups.year;
        } else if (m.groups.month && !formattedDate.month) {
            // formattedDate.month = m.groups.month.padStart(2, '0');
            formattedDate.month = m.groups.month;
        } else if (m.groups.day && !formattedDate.day) {
            // formattedDate.day = m.groups.day.padStart(2, '0');
            formattedDate.day = m.groups.day;
        }
      }
    
      return `${formattedDate.year}-${formattedDate.month}-${formattedDate.day}`; 
    }

// Some test cases
/*
- year1989month1Pju#tV934Ue6GdNS6Am5DAY10
- reg_YEAR2001tV934Umonth04e6GdNS6Am5day016849
- year1943month4DAY1
- Berjt}YEAR1935testmonth11DATE12ABU1234DAY20
- Berjt}YEAR1915testmonth11DATE12ABU12DAYDAY01
*/

const birthday = parseBirthday("HGI_YEAR2019testmonth12DATE12ABU1234DAY23");

console.log(birthday);