let grade1 = 0
let grade2 = 0
let Mgrade = 0
let count1 = 1
let count2 = 1
let Mcount = 1
var correct = false


document.querySelector('#form').addEventListener('submit',function(event){
    event.preventDefault()
  

    let SubjectInput = document.getElementById("new-subject").value;
    let CodeInput = document.getElementById("new-code").value;
    let GradeInput = document.getElementById("new-grade").value;
    let Sem1Input = document.getElementById("sem1").value
    let Sem2Input = document.getElementById("sem2").value



    let check
    var s 
    //check sem1 or sem2
    if(document.getElementById('sem1').checked) { 
        let sem1  = document.getElementById('sem1').value
        check = sem1
        s = 1 
    } 
    if(document.getElementById('sem2').checked){
        let sem2  = document.getElementById('sem2').value 
        check = sem2
        s = 2 
    }


    if(s != 1 || s != 2){
      
    }
    // check input correction
    if(SubjectInput.length == 0 ){
        alert("pls fill Subject name ")
        correct = false
        document.getElementById("new-subject").value = "";
    }
    else if(isNaN(CodeInput)){
        alert("pls fill Subject code")
        correct = false
        document.getElementById("new-code").value = ""; 
    } 
    else if (CodeInput.length > 6){
        alert("your Subject codes are more then 6 digits")
        correct = false
        document.getElementById("new-code").value = ""; 
    }
    else if (CodeInput.length < 6){
        alert("your Subject codes are less than 6 digits")
        correct = false
        document.getElementById("new-code").value = ""; 
     
    }else {
        correct = true ; 
    }
if(correct){ 
    console.log( document.getElementById('sem1').value )
    var major = CodeInput.substring(0, 3);
    if(major==='261' || major==='269' ){
        
        if (GradeInput === 'A' ){
            Mgrade += 4
        }
        if(GradeInput === 'B+') {
            Mgrade += 3.5
        }
        if(GradeInput === 'B') {
            Mgrade += 3
        }
        if(GradeInput === 'C+') {
            Mgrade += 2.5
        }
        if(GradeInput === 'C') {
            Mgrade += 2
        }
        if(GradeInput === 'D+') {
            Mgrade += 1.5
        }
        if(GradeInput === 'D') {
            Mgrade += 1
        }
        if (GradeInput === 'F') {
            Mgrade += 0
        } 
        var GDivideC = Mgrade/Mcount;
        var Mgradefloating = GDivideC.toFixed(2)
        const MGrade = document.querySelector('#gradeM')
        MGrade.setAttribute("style","color: #428la4;")
        MGrade.innerHTML = Mgradefloating

        Mcount++
    }

    if(check === "sem1"){
        const container = document.querySelector('#tableinfo');
        const list = document.createElement('tr');
        const table1 = document.createElement('td');
        const table2 = document.createElement('td');
        const table3 = document.createElement('td');
        const spanSub = document.createElement('span');
        const spanCre = document.createElement('span');
        const spanGra = document.createElement('span');

        spanSub.innerHTML=SubjectInput
        spanCre.innerHTML=CodeInput;
        spanGra.innerHTML=GradeInput;
        
        //Decorate
        table1.setAttribute("style","padding:20px;")
        table2.setAttribute("style","padding:20px;")
        table3.setAttribute("style","padding:20px;")

        //Append to table
        table1.append(spanSub);
        table2.append(spanCre);
        table3.append(spanGra);

        //Append to list(row)
        list.append(table1)
        list.append(table2)
        list.append(table3)

        //Append to ol
        container.append(list)

        if (GradeInput === 'A' ){
            grade1 += 4
        }
        if(GradeInput === 'B+') {
            grade1 += 3.5
        }
        if(GradeInput === 'B') {
            grade1 += 3
        }
        if(GradeInput === 'C+') {
            grade1 += 2.5
        }
        if(GradeInput === 'C') {
            grade1 += 2
        }
        if(GradeInput === 'D+') {
            grade1 += 1.5
        }
        if(GradeInput === 'D') {
            grade1 += 1
        }
        if (GradeInput === 'F') {
            grade1 += 0
        }

        var GDivideC = grade1/count1;
        var gradefloating = GDivideC.toFixed(2)
        const GradeSem1 = document.querySelector('#gradeSem1')
        GradeSem1.setAttribute("style","color: #428la4;")
        //const h2 = document.createElement('h2');
        GradeSem1.innerHTML = gradefloating

        count1 += 1

    


    }else{
        const container2 = document.querySelector('#tableinfo2');
        const list2 = document.createElement('tr');
        const table1_2 = document.createElement('td');
        const table2_2 = document.createElement('td');
        const table3_2 = document.createElement('td');
        const spanSub2 = document.createElement('span');
        const spanCre2 = document.createElement('span');
        const spanGra2 = document.createElement('span');

        spanSub2.innerHTML=SubjectInput
        spanCre2.innerHTML=CodeInput;
        spanGra2.innerHTML=GradeInput;
        
        //Decorate
        table1_2.setAttribute("style","padding:20px;")
        table2_2.setAttribute("style","padding:20px;")
        table3_2.setAttribute("style","padding:20px;")

        //Append to table
        table1_2.append(spanSub2);
        table2_2.append(spanCre2);
        table3_2.append(spanGra2);

        //Append to list(row)
        list2.append(table1_2)
        list2.append(table2_2)
        list2.append(table3_2)

        //Append to ol
        container2.append(list2) 

        if (GradeInput === 'A' ){
            grade2 += 4
        }
        if(GradeInput === 'B+') {
            grade2 += 3.5
        }
        if(GradeInput === 'B') {
            grade2 += 3
        }
        if(GradeInput === 'C+') {
            grade2 += 2.5
        }
        if(GradeInput === 'C') {
            grade2 += 2
        }
        if(GradeInput === 'D+') {
            grade2 += 1.5
        }
        if(GradeInput === 'D') {
            grade2 += 1
        }
        if (GradeInput === 'F') {
            grade2 += 0
        }

        var GDivideC2 = grade2/count2;
        var gradefloating2 = GDivideC2.toFixed(2)
        const GradeSem2 = document.querySelector('#gradeSem2')
        GradeSem2.setAttribute("style","color: #428la4;")
        //const h2 = document.createElement('h2');

        GradeSem2.innerHTML = gradefloating2

        count2 ++
    }
}
    console.log(SubjectInput)
    console.log(CodeInput)
    console.log(GradeInput)
    console.log(GDivideC)



},false)