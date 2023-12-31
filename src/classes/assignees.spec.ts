import {DefaultProcessorOptions} from '../../__tests__/constants/default-processor-options';
import {generateIIssue} from '../../__tests__/functions/generate-iissue';
import {IIssue} from '../interfaces/issue';
import {IIssuesProcessorOptions} from '../interfaces/issues-processor-options';
import {Assignees} from './assignees';
import {Issue} from './issue';

describe('Assignees', (): void => {
  let assignees: Assignees;
  let optionsInterface: IIssuesProcessorOptions;
  let issue: Issue;
  let issueInterface: IIssue;

  beforeEach((): void => {
    optionsInterface = {
      ...DefaultProcessorOptions,
      exemptAllAssignees: false
    };
    issueInterface = generateIIssue();
  });

  describe('shouldExemptAssignees()', (): void => {
    describe('when the given issue is not a pull request', (): void => {
      beforeEach((): void => {
        issueInterface.pull_request = undefined;
      });

      describe('when the given options are not configured to exempt an assignee', (): void => {
        beforeEach((): void => {
          optionsInterface.exemptAssignees = '';
        });

        describe('when the given options are not configured to exempt an issue with an assignee', (): void => {
          beforeEach((): void => {
            optionsInterface.exemptIssueAssignees = '';
          });

          describe('when the given issue does not have an assignee', (): void => {
            beforeEach((): void => {
              issueInterface.assignees = [];
            });

            it('should return false', (): void => {
              expect.assertions(1);
              issue = new Issue(optionsInterface, issueInterface);
              assignees = new Assignees(optionsInterface, issue);

              const result = assignees.shouldExemptAssignees();

              expect(result).toStrictEqual(false);
            });
          });

          describe('when the given issue does have an assignee', (): void => {
            beforeEach((): void => {
              issueInterface.assignees = [
                {
                  login: 'dummy-login',
                  type: 'User'
                }
              ];
            });

            it('should return false', (): void => {
              expect.assertions(1);
              issue = new Issue(optionsInterface, issueInterface);
              assignees = new Assignees(optionsInterface, issue);

              const result = assignees.shouldExemptAssignees();

              expect(result).toStrictEqual(false);
            });
          });
        });

        describe('when the given options are configured to exempt an issue with an assignee', (): void => {
          beforeEach((): void => {
            optionsInterface.exemptIssueAssignees =
              'dummy-exempt-issue-assignee';
          });

          describe('when the given issue does not have an assignee', (): void => {
            beforeEach((): void => {
              issueInterface.assignees = [];
            });

            it('should return false', (): void => {
              expect.assertions(1);
              issue = new Issue(optionsInterface, issueInterface);
              assignees = new Assignees(optionsInterface, issue);

              const result = assignees.shouldExemptAssignees();

              expect(result).toStrictEqual(false);
            });
          });

          describe('when the given issue does have an assignee different than the exempt issue assignee', (): void => {
            beforeEach((): void => {
              issueInterface.assignees = [
                {
                  login: 'dummy-login',
                  type: 'User'
                }
              ];
            });

            it('should return false', (): void => {
              expect.assertions(1);
              issue = new Issue(optionsInterface, issueInterface);
              assignees = new Assignees(optionsInterface, issue);

              const result = assignees.shouldExemptAssignees();

              expect(result).toStrictEqual(false);
            });
          });

          describe('when the given issue does have an assignee equaling the exempt issue assignee', (): void => {
            beforeEach((): void => {
              issueInterface.assignees = [
                {
                  login: 'dummy-exempt-issue-assignee',
                  type: 'User'
                }
              ];
            });

            it('should return true', (): void => {
              expect.assertions(1);
              issue = new Issue(optionsInterface, issueInterface);
              assignees = new Assignees(optionsInterface, issue);

              const result = assignees.shouldExemptAssignees();

              expect(result).toStrictEqual(true);
            });
          });
        });
      });

      describe('when the given options are configured to exempt an assignee', (): void => {
        beforeEach((): void => {
          optionsInterface.exemptAssignees = 'dummy-exempt-assignee';
        });

        describe('when the given options are not configured to exempt an issue with an assignee', (): void => {
          beforeEach((): void => {
            optionsInterface.exemptIssueAssignees = '';
          });

          describe('when the given issue does not have an assignee', (): void => {
            beforeEach((): void => {
              issueInterface.assignees = [];
            });

            it('should return false', (): void => {
              expect.assertions(1);
              issue = new Issue(optionsInterface, issueInterface);
              assignees = new Assignees(optionsInterface, issue);

              const result = assignees.shouldExemptAssignees();

              expect(result).toStrictEqual(false);
            });
          });

          describe('when the given issue does have an assignee different than the exempt assignee', (): void => {
            beforeEach((): void => {
              issueInterface.assignees = [
                {
                  login: 'dummy-login',
                  type: 'User'
                }
              ];
            });

            it('should return false', (): void => {
              expect.assertions(1);
              issue = new Issue(optionsInterface, issueInterface);
              assignees = new Assignees(optionsInterface, issue);

              const result = assignees.shouldExemptAssignees();

              expect(result).toStrictEqual(false);
            });
          });

          describe('when the given issue does have an assignee equaling the exempt assignee', (): void => {
            beforeEach((): void => {
              issueInterface.assignees = [
                {
                  login: 'dummy-exempt-assignee',
                  type: 'User'
                }
              ];
            });

            it('should return true', (): void => {
              expect.assertions(1);
              issue = new Issue(optionsInterface, issueInterface);
              assignees = new Assignees(optionsInterface, issue);

              const result = assignees.shouldExemptAssignees();

              expect(result).toStrictEqual(true);
            });
          });
        });

        describe('when the given options are configured to exempt an issue with an assignee', (): void => {
          beforeEach((): void => {
            optionsInterface.exemptIssueAssignees =
              'dummy-exempt-issue-assignee';
          });

          describe('when the given issue does not have an assignee', (): void => {
            beforeEach((): void => {
              issueInterface.assignees = [];
            });

            it('should return false', (): void => {
              expect.assertions(1);
              issue = new Issue(optionsInterface, issueInterface);
              assignees = new Assignees(optionsInterface, issue);

              const result = assignees.shouldExemptAssignees();

              expect(result).toStrictEqual(false);
            });
          });

          describe('when the given issue does have an assignee different than the exempt issue assignee', (): void => {
            beforeEach((): void => {
              issueInterface.assignees = [
                {
                  login: 'dummy-login',
                  type: 'User'
                }
              ];
            });

            it('should return false', (): void => {
              expect.assertions(1);
              issue = new Issue(optionsInterface, issueInterface);
              assignees = new Assignees(optionsInterface, issue);

              const result = assignees.shouldExemptAssignees();

              expect(result).toStrictEqual(false);
            });
          });

          describe('when the given issue does have an assignee equaling the exempt issue assignee', (): void => {
            beforeEach((): void => {
              issueInterface.assignees = [
                {
                  login: 'dummy-exempt-issue-assignee',
                  type: 'User'
                }
              ];
            });

            it('should return true', (): void => {
              expect.assertions(1);
              issue = new Issue(optionsInterface, issueInterface);
              assignees = new Assignees(optionsInterface, issue);

              const result = assignees.shouldExemptAssignees();

              expect(result).toStrictEqual(true);
            });
          });

          describe('when the given issue does have an assignee different than the exempt assignee', (): void => {
            beforeEach((): void => {
              issueInterface.assignees = [
                {
                  login: 'dummy-login',
                  type: 'User'
                }
              ];
            });

            it('should return false', (): void => {
              expect.assertions(1);
              issue = new Issue(optionsInterface, issueInterface);
              assignees = new Assignees(optionsInterface, issue);

              const result = assignees.shouldExemptAssignees();

              expect(result).toStrictEqual(false);
            });
          });

          describe('when the given issue does have an assignee equaling the exempt assignee', (): void => {
            beforeEach((): void => {
              issueInterface.assignees = [
                {
                  login: 'dummy-exempt-assignee',
                  type: 'User'
                }
              ];
            });

            it('should return false', (): void => {
              expect.assertions(1);
              issue = new Issue(optionsInterface, issueInterface);
              assignees = new Assignees(optionsInterface, issue);

              const result = assignees.shouldExemptAssignees();

              expect(result).toStrictEqual(false);
            });
          });
        });
      });

      describe('when the given options are configured to exempt all assignees', (): void => {
        beforeEach((): void => {
          optionsInterface.exemptAllAssignees = true;
        });

        describe('when the given issue does not have an assignee', (): void => {
          beforeEach((): void => {
            issueInterface.assignees = [];
          });

          it('should return false', (): void => {
            expect.assertions(1);
            issue = new Issue(optionsInterface, issueInterface);
            assignees = new Assignees(optionsInterface, issue);

            const result = assignees.shouldExemptAssignees();

            expect(result).toStrictEqual(false);
          });
        });

        describe('when the given issue does have an assignee', (): void => {
          beforeEach((): void => {
            issueInterface.assignees = [
              {
                login: 'dummy-exempt-assignee',
                type: 'User'
              }
            ];
          });

          it('should return true', (): void => {
            expect.assertions(1);
            issue = new Issue(optionsInterface, issueInterface);
            assignees = new Assignees(optionsInterface, issue);

            const result = assignees.shouldExemptAssignees();

            expect(result).toStrictEqual(true);
          });
        });

        describe('when the given options are not configured to exempt all issue assignees', (): void => {
          beforeEach((): void => {
            optionsInterface.exemptAllIssueAssignees = false;
          });

          describe('when the given issue does not have an assignee', (): void => {
            beforeEach((): void => {
              issueInterface.assignees = [];
            });

            it('should return false', (): void => {
              expect.assertions(1);
              issue = new Issue(optionsInterface, issueInterface);
              assignees = new Assignees(optionsInterface, issue);

              const result = assignees.shouldExemptAssignees();

              expect(result).toStrictEqual(false);
            });
          });

          describe('when the given issue does have an assignee', (): void => {
            beforeEach((): void => {
              issueInterface.assignees = [
                {
                  login: 'dummy-exempt-assignee',
                  type: 'User'
                }
              ];
            });

            it('should return false', (): void => {
              expect.assertions(1);
              issue = new Issue(optionsInterface, issueInterface);
              assignees = new Assignees(optionsInterface, issue);

              const result = assignees.shouldExemptAssignees();

              expect(result).toStrictEqual(false);
            });
          });
        });

        describe('when the given options are configured to exempt all issue assignees', (): void => {
          beforeEach((): void => {
            optionsInterface.exemptAllIssueAssignees = true;
          });

          describe('when the given issue does not have an assignee', (): void => {
            beforeEach((): void => {
              issueInterface.assignees = [];
            });

            it('should return false', (): void => {
              expect.assertions(1);
              issue = new Issue(optionsInterface, issueInterface);
              assignees = new Assignees(optionsInterface, issue);

              const result = assignees.shouldExemptAssignees();

              expect(result).toStrictEqual(false);
            });
          });

          describe('when the given issue does have an assignee', (): void => {
            beforeEach((): void => {
              issueInterface.assignees = [
                {
                  login: 'dummy-exempt-issue-assignee',
                  type: 'User'
                }
              ];
            });

            it('should return true', (): void => {
              expect.assertions(1);
              issue = new Issue(optionsInterface, issueInterface);
              assignees = new Assignees(optionsInterface, issue);

              const result = assignees.shouldExemptAssignees();

              expect(result).toStrictEqual(true);
            });
          });
        });
      });
    });

    describe('when the given issue is a pull request', (): void => {
      beforeEach((): void => {
        issueInterface.pull_request = {};
      });

      describe('when the given options are not configured to exempt an assignee', (): void => {
        beforeEach((): void => {
          optionsInterface.exemptAssignees = '';
        });

        describe('when the given options are not configured to exempt a pull request with an assignee', (): void => {
          beforeEach((): void => {
            optionsInterface.exemptPrAssignees = '';
          });

          describe('when the given pull request does not have an assignee', (): void => {
            beforeEach((): void => {
              issueInterface.assignees = [];
            });

            it('should return false', (): void => {
              expect.assertions(1);
              issue = new Issue(optionsInterface, issueInterface);
              assignees = new Assignees(optionsInterface, issue);

              const result = assignees.shouldExemptAssignees();

              expect(result).toStrictEqual(false);
            });
          });

          describe('when the given pull request does have an assignee', (): void => {
            beforeEach((): void => {
              issueInterface.assignees = [
                {
                  login: 'dummy-login',
                  type: 'User'
                }
              ];
            });

            it('should return false', (): void => {
              expect.assertions(1);
              issue = new Issue(optionsInterface, issueInterface);
              assignees = new Assignees(optionsInterface, issue);

              const result = assignees.shouldExemptAssignees();

              expect(result).toStrictEqual(false);
            });
          });
        });

        describe('when the given options are configured to exempt a pull request with an assignee', (): void => {
          beforeEach((): void => {
            optionsInterface.exemptPrAssignees = 'dummy-exempt-pr-assignee';
          });

          describe('when the given pull request does not have an assignee', (): void => {
            beforeEach((): void => {
              issueInterface.assignees = [];
            });

            it('should return false', (): void => {
              expect.assertions(1);
              issue = new Issue(optionsInterface, issueInterface);
              assignees = new Assignees(optionsInterface, issue);

              const result = assignees.shouldExemptAssignees();

              expect(result).toStrictEqual(false);
            });
          });

          describe('when the given pull request does have an assignee different than the exempt pull request assignee', (): void => {
            beforeEach((): void => {
              issueInterface.assignees = [
                {
                  login: 'dummy-login',
                  type: 'User'
                }
              ];
            });

            it('should return false', (): void => {
              expect.assertions(1);
              issue = new Issue(optionsInterface, issueInterface);
              assignees = new Assignees(optionsInterface, issue);

              const result = assignees.shouldExemptAssignees();

              expect(result).toStrictEqual(false);
            });
          });

          describe('when the given pull request does have an assignee equaling the exempt pull request assignee', (): void => {
            beforeEach((): void => {
              issueInterface.assignees = [
                {
                  login: 'dummy-exempt-pr-assignee',
                  type: 'User'
                }
              ];
            });

            it('should return true', (): void => {
              expect.assertions(1);
              issue = new Issue(optionsInterface, issueInterface);
              assignees = new Assignees(optionsInterface, issue);

              const result = assignees.shouldExemptAssignees();

              expect(result).toStrictEqual(true);
            });
          });
        });
      });

      describe('when the given options are configured to exempt an assignee', (): void => {
        beforeEach((): void => {
          optionsInterface.exemptAssignees = 'dummy-exempt-assignee';
        });

        describe('when the given options are not configured to exempt a pull request with an assignee', (): void => {
          beforeEach((): void => {
            optionsInterface.exemptPrAssignees = '';
          });

          describe('when the given pull request does not have an assignee', (): void => {
            beforeEach((): void => {
              issueInterface.assignees = [];
            });

            it('should return false', (): void => {
              expect.assertions(1);
              issue = new Issue(optionsInterface, issueInterface);
              assignees = new Assignees(optionsInterface, issue);

              const result = assignees.shouldExemptAssignees();

              expect(result).toStrictEqual(false);
            });
          });

          describe('when the given pull request does have an assignee different than the exempt assignee', (): void => {
            beforeEach((): void => {
              issueInterface.assignees = [
                {
                  login: 'dummy-login',
                  type: 'User'
                }
              ];
            });

            it('should return false', (): void => {
              expect.assertions(1);
              issue = new Issue(optionsInterface, issueInterface);
              assignees = new Assignees(optionsInterface, issue);

              const result = assignees.shouldExemptAssignees();

              expect(result).toStrictEqual(false);
            });
          });

          describe('when the given pull request does have an assignee equaling the exempt assignee', (): void => {
            beforeEach((): void => {
              issueInterface.assignees = [
                {
                  login: 'dummy-exempt-assignee',
                  type: 'User'
                }
              ];
            });

            it('should return true', (): void => {
              expect.assertions(1);
              issue = new Issue(optionsInterface, issueInterface);
              assignees = new Assignees(optionsInterface, issue);

              const result = assignees.shouldExemptAssignees();

              expect(result).toStrictEqual(true);
            });
          });
        });

        describe('when the given options are configured to exempt a pull request with an assignee', (): void => {
          beforeEach((): void => {
            optionsInterface.exemptPrAssignees = 'dummy-exempt-pr-assignee';
          });

          describe('when the given pull request does not have an assignee', (): void => {
            beforeEach((): void => {
              issueInterface.assignees = [];
            });

            it('should return false', (): void => {
              expect.assertions(1);
              issue = new Issue(optionsInterface, issueInterface);
              assignees = new Assignees(optionsInterface, issue);

              const result = assignees.shouldExemptAssignees();

              expect(result).toStrictEqual(false);
            });
          });

          describe('when the given pull request does have an assignee different than the exempt pull request assignee', (): void => {
            beforeEach((): void => {
              issueInterface.assignees = [
                {
                  login: 'dummy-login',
                  type: 'User'
                }
              ];
            });

            it('should return false', (): void => {
              expect.assertions(1);
              issue = new Issue(optionsInterface, issueInterface);
              assignees = new Assignees(optionsInterface, issue);

              const result = assignees.shouldExemptAssignees();

              expect(result).toStrictEqual(false);
            });
          });

          describe('when the given pull request does have an assignee equaling the exempt pull request assignee', (): void => {
            beforeEach((): void => {
              issueInterface.assignees = [
                {
                  login: 'dummy-exempt-pr-assignee',
                  type: 'User'
                }
              ];
            });

            it('should return true', (): void => {
              expect.assertions(1);
              issue = new Issue(optionsInterface, issueInterface);
              assignees = new Assignees(optionsInterface, issue);

              const result = assignees.shouldExemptAssignees();

              expect(result).toStrictEqual(true);
            });
          });

          describe('when the given pull request does have an assignee different than the exempt assignee', (): void => {
            beforeEach((): void => {
              issueInterface.assignees = [
                {
                  login: 'dummy-login',
                  type: 'User'
                }
              ];
            });

            it('should return false', (): void => {
              expect.assertions(1);
              issue = new Issue(optionsInterface, issueInterface);
              assignees = new Assignees(optionsInterface, issue);

              const result = assignees.shouldExemptAssignees();

              expect(result).toStrictEqual(false);
            });
          });

          describe('when the given pull request does have an assignee equaling the exempt assignee', (): void => {
            beforeEach((): void => {
              issueInterface.assignees = [
                {
                  login: 'dummy-exempt-assignee',
                  type: 'User'
                }
              ];
            });

            it('should return false', (): void => {
              expect.assertions(1);
              issue = new Issue(optionsInterface, issueInterface);
              assignees = new Assignees(optionsInterface, issue);

              const result = assignees.shouldExemptAssignees();

              expect(result).toStrictEqual(false);
            });
          });
        });
      });

      describe('when the given options are configured to exempt all assignees', (): void => {
        beforeEach((): void => {
          optionsInterface.exemptAllAssignees = true;
        });

        describe('when the given pull request does not have an assignee', (): void => {
          beforeEach((): void => {
            issueInterface.assignees = [];
          });

          it('should return false', (): void => {
            expect.assertions(1);
            issue = new Issue(optionsInterface, issueInterface);
            assignees = new Assignees(optionsInterface, issue);

            const result = assignees.shouldExemptAssignees();

            expect(result).toStrictEqual(false);
          });
        });

        describe('when the given pull request does have an assignee', (): void => {
          beforeEach((): void => {
            issueInterface.assignees = [
              {
                login: 'dummy-exempt-assignee',
                type: 'User'
              }
            ];
          });

          it('should return true', (): void => {
            expect.assertions(1);
            issue = new Issue(optionsInterface, issueInterface);
            assignees = new Assignees(optionsInterface, issue);

            const result = assignees.shouldExemptAssignees();

            expect(result).toStrictEqual(true);
          });
        });

        describe('when the given options are not configured to exempt all pull request assignees', (): void => {
          beforeEach((): void => {
            optionsInterface.exemptAllPrAssignees = false;
          });

          describe('when the given pull request does not have an assignee', (): void => {
            beforeEach((): void => {
              issueInterface.assignees = [];
            });

            it('should return false', (): void => {
              expect.assertions(1);
              issue = new Issue(optionsInterface, issueInterface);
              assignees = new Assignees(optionsInterface, issue);

              const result = assignees.shouldExemptAssignees();

              expect(result).toStrictEqual(false);
            });
          });

          describe('when the given pull request does have an assignee', (): void => {
            beforeEach((): void => {
              issueInterface.assignees = [
                {
                  login: 'dummy-exempt-assignee',
                  type: 'User'
                }
              ];
            });

            it('should return false', (): void => {
              expect.assertions(1);
              issue = new Issue(optionsInterface, issueInterface);
              assignees = new Assignees(optionsInterface, issue);

              const result = assignees.shouldExemptAssignees();

              expect(result).toStrictEqual(false);
            });
          });
        });

        describe('when the given options are configured to exempt all pull request assignees', (): void => {
          beforeEach((): void => {
            optionsInterface.exemptAllPrAssignees = true;
          });

          describe('when the given pull request does not have an assignee', (): void => {
            beforeEach((): void => {
              issueInterface.assignees = [];
            });

            it('should return false', (): void => {
              expect.assertions(1);
              issue = new Issue(optionsInterface, issueInterface);
              assignees = new Assignees(optionsInterface, issue);

              const result = assignees.shouldExemptAssignees();

              expect(result).toStrictEqual(false);
            });
          });

          describe('when the given pull request does have an assignee', (): void => {
            beforeEach((): void => {
              issueInterface.assignees = [
                {
                  login: 'dummy-exempt-issue-assignee',
                  type: 'User'
                }
              ];
            });

            it('should return true', (): void => {
              expect.assertions(1);
              issue = new Issue(optionsInterface, issueInterface);
              assignees = new Assignees(optionsInterface, issue);

              const result = assignees.shouldExemptAssignees();

              expect(result).toStrictEqual(true);
            });
          });
        });
      });
    });
  });
});
