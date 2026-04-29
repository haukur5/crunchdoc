# GIT

//               Git strategy tree              //

                         Main
                          |
                      Development
                     |     |     |
              features/  bugfix/ refactor/

// Our strategy :
When working on features, bugfixes or refactoring we create our own branches using git checkout -b features/*featurename* for example. Then we commit, create pull requests and push to the dev branch. We only use main to create a pull request when we're ready to turn in.