VERSION     := 1.0.0
COMMIT      := `git rev-parse HEAD`
DATE        := `date +%FT%T%z`
BUILD_FLAGS := "-X=main.appVersion=$(VERSION) -X=main.appCommit=$(COMMIT) -X=main.appBuilt=$(DATE)"


netlify:
	@echo "Compiling for NETLIFY..."
	@cd web/app && npm ci && npm run build && cd ../..
	@echo "Done!"