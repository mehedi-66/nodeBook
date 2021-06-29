
/* ================ pushing git branches  =================
    => git status 
    => git log 
    => git branch
    => git branch -b bugFix     // create new branch

    // if i want to send the branch to my Boss
    => git checkout master // then check the remote means > gitHub server add
    => git remote 
    => git remote -v   // it will show the remote link show if is it add  
    
    // or Add remote repositoy link with the key : 1) HTTPS 2) SSH
    => git remote add origin (repository link https://github.com/mehedi-66/project.git)
    => git remote  // it will show oregin the link name

    ******** push the code on remote prepositiory *******
    => git push -u origin master    // master branch a code push done 
        // maste brach push on gitHub 

    ********** how to add or push others branches 
    => git checkout bugFix      // swithc others branch
    
    => git push origin bugFix // this branch add on remote repository
    
    => git push origin bugFix:mybugFix      // local bugFix -> remote mybugFix name_change

    *********** Delete Branch from remote and local *******
    => git branch -d bugFix     // it will delete -D when Actualy
    
    => git push -d origin bugFix    // this Branch delelte from remote prepositiory
*/
