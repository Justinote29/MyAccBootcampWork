## Git Question A:

How do you delete a local branch after completing work on it.  How would you delete a remote branch?

Local Branch
After pushing and merging the branch, you can use 
git branch -d "branchName"

Remote Branch
To delete a remote branch, you can first list the remote branches with
git branch -r
Then delete it with
git push origin -d "branchName"

However, I would probably just do this from git hub after merging a pull request and not in the terminal:)

## Git Question B: 

You made a mistake in committing your last set of changes. How would you fix it?

git reset --hard

Bonus question:

Would your approach change if you pushed the erroneous commit, that others may have pulled from and based their work upon?

I think I would use git log or go on github to get the name of the previous commit (commit reference) that worked and use 
git reset 'commitReference' to reset the master to that and have everyone repull