.PHONY: install lint test build dev check
install:
	pnpm install
lint:
	eslint .
test:
	jest --coverage --passWithNoTests
build:
	next build
dev:
	next dev -p 3000
check: lint test build
