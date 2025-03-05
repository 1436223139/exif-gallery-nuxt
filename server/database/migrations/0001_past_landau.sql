CREATE TABLE `photo_tags` (
	`photo_id` text NOT NULL,
	`tag_id` text NOT NULL,
	`created_at` integer DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY(`photo_id`, `tag_id`),
	FOREIGN KEY (`photo_id`) REFERENCES `photos`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`tag_id`) REFERENCES `tags`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `tags` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`created_at` integer DEFAULT CURRENT_TIMESTAMP
);
--> statement-breakpoint
CREATE UNIQUE INDEX `tags_name_unique` ON `tags` (`name`);