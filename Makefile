.POSIX:
SHELL := /bin/bash
PNPM :=  $(shell which pnpm)
# Build the application
.PHONY: build
build: install fmt
	@echo -e "\033[32mBuilding the application...\033[0m"
	$(PNPM) run build
	@echo -e "\033[32mBuild finished.\033[0m"
# Local development
dev: install
	$(PNPM) run dev
# Format the code
fmt:
	@echo -e "\033[32mFormatting the code...\033[0m"
	$(PNPM) run fmt
	@echo -e "\033[32mFormatting finished.\033[0m"
# Install dependencies
install:
	@echo -e "\033[32mInstalling dependencies...\033[0m"
	${PNPM} install
	@echo -e "\033[32mDependencies installed.\033[0m"
# Lint the code
.PHONY: lint
lint:
	@echo -e "\033[32mLinting the code...\033[0m"
	${PNPM} run lint
	@echo -e "\033[32mLinting finished.\033[0m"
