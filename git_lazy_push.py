from subprocess import Popen, PIPE
from codecs import decode

while True:
	print("//")
	print("Press enter to pull")
	print("Enter anything for commit message")
	print("::")
	msg = input()

	if msg == "":
		print("Pulling.")
		Popen(
			[
				'git', 'pull', 'origin', 'master'
			]
		).wait()
		continue

	print("Pushing.")

	Popen(
		[
			'git', 'add', '*'
		]
	).wait()

	Popen(
		[
			'git', 'add', '-u'
		]
	).wait()

	Popen(
		[
			'git', 'commit', '-m', msg
		]
	).wait()

	Popen(
		[
			'git', 'log', '--max-count', '1'
		]
	).wait()

	Popen(
		[
			"git", "push", "origin", "master"
		]
	).wait()

	print()
	print()
	print()